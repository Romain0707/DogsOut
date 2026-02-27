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

        // 1) dossier images
        $outDir = $projectDir . '/public/uploads/balades';
        $fs->mkdir($outDir);

        $filename = 'balade_' . $balade->getId() . '.png';
        $outputPath = $outDir . '/' . $filename;

        // Supprimer ancienne images
        if ($balade->getSnapshotPath()) {
            $oldPath = $projectDir . '/public' . $balade->getSnapshotPath();
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }
        }

        // 2) rendre le HTML snapshot dans un fichier temporaire
        $tmpDir = $projectDir . '/var/snapshots';
        $fs->mkdir($tmpDir);

        $tmpHtmlPath = $tmpDir . '/balade_' . $balade->getId() . '.html';
        $html = $this->twig->render('balade/snapshot.html.twig', [
            'balade' => $balade,
        ]);
        $fs->dumpFile($tmpHtmlPath, $html);

        // 3) lancer Playwright sur le fichier local
        $process = new Process([
            'node',
            $projectDir . '/tools/snapshot.js',
            $tmpHtmlPath,
            $outputPath
        ]);

        $process->setTimeout(120);
        $process->setIdleTimeout(120);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new \RuntimeException('Snapshot failed: ' . $process->getErrorOutput() . $process->getOutput());
        }

        // 4) sauver le chemin public
        $balade->setSnapshotPath('/uploads/balades/' . $filename);
        $this->em->flush();
    }
}