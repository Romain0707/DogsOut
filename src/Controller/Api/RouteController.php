<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Attribute\Route;

class RouteController extends AbstractController
{
    #[Route('/api/hiking-route', name: 'api_hiking_route', methods: ['POST'])]
    public function hikingRoute(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $points = $data['points'] ?? [];

        if (!is_array($points) || count($points) < 2) {
            return $this->json(['error' => 'Need at least 2 points'], 400);
        }

        // ORS attend [lng, lat]
        $coords = [];
        foreach ($points as $p) {
            if (!is_array($p) || count($p) !== 2) {
                return $this->json(['error' => 'Invalid point'], 400);
            }
            $lat = (float)$p[0];
            $lng = (float)$p[1];
            $coords[] = [$lng, $lat];
        }

        $apiKey = $_ENV['ORS_API_KEY'] ?? null;
        if (!$apiKey) return $this->json(['error' => 'Missing ORS_API_KEY'], 500);

        $client = \Symfony\Component\HttpClient\HttpClient::create();

        $body = [
            'coordinates' => $coords,
        ];

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
            'geojson'  => $feature,
            'distance' => $segment['distance'] ?? null,
            'duration' => $segment['duration'] ?? null,
        ]);
    }
}