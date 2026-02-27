<?php

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;

class JsonToArrayTransformer implements DataTransformerInterface
{
    public function transform(mixed $value): string
    {
        if (empty($value) || !is_array($value)) {
            return '';
        }
        return json_encode($value, JSON_UNESCAPED_UNICODE) ?: '';
    }

    public function reverseTransform(mixed $value): array
    {
        if ($value === null) {
            return [];
        }

        if (is_array($value)) {
            return $value; 
        }

        if (!is_string($value)) {
            return [];
        }

        $value = trim($value);
        if ($value === '') {
            return [];
        }

        $decoded = json_decode($value, true);
        return is_array($decoded) ? $decoded : [];
    }
}