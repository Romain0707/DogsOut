<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Attribute\Route;

class RouteController extends AbstractController
{
    private const ALLOWED_PROFILES = [
        'foot-walking',
        'foot-hiking',
        'cycling-regular',
        'wheelchair',
    ];

    #[Route('/api/hiking-route', name: 'api_hiking_route', methods: ['POST'])]
    public function hikingRoute(Request $request): JsonResponse
    {
        $data    = json_decode($request->getContent(), true) ?? [];
        $points  = $data['points']  ?? [];
        $profile = $data['profile'] ?? 'foot-walking';

        if (!in_array($profile, self::ALLOWED_PROFILES, true)) {
            $profile = 'foot-walking';
        }

        if (!is_array($points) || count($points) < 2) {
            return $this->json(['error' => 'Need at least 2 points'], 400);
        }

        $coords = [];
        foreach ($points as $p) {
            if (!is_array($p) || count($p) !== 2) {
                return $this->json(['error' => 'Invalid point'], 400);
            }
            $coords[] = [(float) $p[1], (float) $p[0]]; // [lng, lat]
        }

        $apiKey = $_ENV['ORS_API_KEY'] ?? null;
        if (!$apiKey) {
            return $this->json(['error' => 'Missing ORS_API_KEY'], 500);
        }

        $client = HttpClient::create();

        $response = $client->request(
            'POST',
            sprintf('https://api.openrouteservice.org/v2/directions/%s/geojson', $profile),
            [
                'headers' => [
                    'Authorization' => $apiKey,
                    'Content-Type'  => 'application/json',
                    'Accept'        => 'application/geo+json',
                ],
                'json' => ['coordinates' => $coords],
            ]
        );

        $status = $response->getStatusCode();
        $json   = $response->toArray(false);

        if ($status >= 400) {
            return $this->json(['error' => 'ORS error', 'details' => $json], $status);
        }

        $feature = $json['features'][0] ?? null;
        $segment = $feature['properties']['segments'][0] ?? null;

        return $this->json([
            'geojson'  => $feature,
            'distance' => $segment['distance'] ?? null, 
            'duration' => $segment['duration'] ?? null,
        ]);
    }
}
