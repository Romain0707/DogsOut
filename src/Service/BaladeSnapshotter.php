<?php

namespace App\Service;

use App\Entity\Balade;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Process\Process;
use Twig\Environment;

class BaladeSnapshotter
{
    public function __construct(
        private Environment $twig,
        private EntityManagerInterface $em,
    ) {}

    public function generate(Balade $balade, string $projectDir): void
    {
        $fs = new Filesystem();

        $outDir = $projectDir . '/public/uploads/balades';
        $fs->mkdir($outDir);

        // Nom avec timestamp pour forcer le cache-busting à chaque modification
        $filename   = 'balade_' . $balade->getId() . '_' . time() . '.png';
        $outputPath = $outDir . '/' . $filename;

        // Supprimer l'ancienne image si elle existe
        if ($balade->getSnapshotPath()) {
            $oldPath = $projectDir . '/public' . $balade->getSnapshotPath();
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }
        }

        // Générer le HTML temporaire pour Playwright
        $tmpDir      = $projectDir . '/var/snapshots';
        $fs->mkdir($tmpDir);
        $tmpHtmlPath = $tmpDir . '/balade_' . $balade->getId() . '.html';

        $html = $this->twig->render('balade/snapshot.html.twig', [
            'balade' => $balade,
        ]);
        $fs->dumpFile($tmpHtmlPath, $html);

        // Lancer Playwright
        $process = new Process([
            'node',
            $projectDir . '/tools/snapshot.js',
            $tmpHtmlPath,
            $outputPath,
        ]);

        $process->setTimeout(120);
        $process->setIdleTimeout(120);
        $process->run();

        // Nettoyer le fichier HTML temporaire
        if (file_exists($tmpHtmlPath)) {
            unlink($tmpHtmlPath);
        }

        if (!$process->isSuccessful()) {
            throw new \RuntimeException(
                'Snapshot failed: ' . $process->getErrorOutput() . $process->getOutput()
            );
        }

        // Sauvegarder le nouveau chemin public
        $balade->setSnapshotPath('/uploads/balades/' . $filename);
        $this->em->flush();
    }
}
