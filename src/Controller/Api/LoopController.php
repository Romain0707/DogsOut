<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Attribute\Route;

class LoopController extends AbstractController
{
    #[Route('/api/hiking-loop', name: 'api_hiking_loop', methods: ['POST'])]
    public function hikingLoop(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];

        // start = [lat, lng]
        $start = $data['start'] ?? null;
        $km = (float)($data['km'] ?? 6);
        $seed = (int)($data['seed'] ?? 1);

        if (!is_array($start) || count($start) !== 2) {
            return $this->json(['error' => 'Invalid start'], 400);
        }

        // longueur en mètres (ORS attend "length" en mètres)
        // ORS round_trip: length max = 100000m (100 km)
        $km = max(1.0, min($km, 100.0));
        $lengthMeters = (int) round($km * 1000);

        // sécurité ultime
        $lengthMeters = max(1000, min($lengthMeters, 100000));

        $apiKey = $_ENV['ORS_API_KEY'] ?? null;
        if (!$apiKey) {
            return $this->json(['error' => 'Missing ORS_API_KEY'], 500);
        }

        // ORS round_trip: 1 seule coordonnée [lng, lat] + options.round_trip
        $body = [
            'coordinates' => [
                [(float)$start[1], (float)$start[0]]
            ],
            'options' => [
                'round_trip' => [
                    'length' => $lengthMeters,
                    'points' => 4,   // nb de points intermédiaires (4–8 c’est bien)
                    'seed'   => $seed
                ]
            ]
        ];

        $client = HttpClient::create();

        try {
            $response = $client->request(
                'POST',
                'https://api.openrouteservice.org/v2/directions/foot-hiking/geojson',
                [
                    'headers' => [
                        'Authorization' => $apiKey,
                        'Content-Type'  => 'application/json',
                        'Accept'        => 'application/geo+json',
                    ],
                    'json' => $body,
                ]
            );

            $status = $response->getStatusCode();
            $json = $response->toArray(false);

            if ($status >= 400) {
                return $this->json(['error' => 'ORS error', 'details' => $json], $status);
            }

            $feature = $json['features'][0] ?? null;
            $segment = $feature['properties']['segments'][0] ?? null;

            return $this->json([
                'geojson'   => $feature,
                'distance'  => $segment['distance'] ?? null,
                'duration'  => $segment['duration'] ?? null,
            ]);

        } catch (\Throwable $e) {
            return $this->json(['error' => 'Proxy failure', 'message' => $e->getMessage()], 500);
        }
    }
}