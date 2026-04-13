<?php

namespace App\Service;

class SluggerService
{
    public function slugify(string $text): string
    {
        // Convertit les caractères accentués
        $text = transliterator_transliterate('Any-Latin; Latin-ASCII; Lower()', $text);

        // Remplace tout ce qui n'est pas alphanumérique par un tiret
        $text = preg_replace('/[^a-z0-9]+/', '-', $text);

        // Supprime les tirets en début et fin
        $text = trim($text, '-');

        return $text;
    }
}