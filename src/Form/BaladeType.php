<?php

namespace App\Form;

use App\Entity\Balade;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BaladeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre',
            ])
            ->add('description', TextareaType::class, [
                'label'    => 'Description',
                'required' => false,
            ])
            ->add('isPublic', CheckboxType::class, [
                'label'    => 'Balade publique',
                'required' => false,
            ])
            // ── Champs carte (hidden) ──────────────────────────────────
            // Le JS envoie des strings JSON.
            // Doctrine stocke des arrays (type: json).
            // Le CallbackTransformer fait la conversion string ↔ array.
            ->add('routeGeoJson', HiddenType::class, [
                'required' => false,
            ])
            ->add('waypointsJson', HiddenType::class, [
                'required' => false,
            ])
            ->add('distanceMeters', HiddenType::class, [
                'required' => false,
            ])
            ->add('durationSeconds', HiddenType::class, [
                'required' => false,
            ])
        ;

        // ── Transformer routeGeoJson : string JSON ↔ array ────────────
        $builder->get('routeGeoJson')->addModelTransformer(new CallbackTransformer(
            // array (entité) → string (formulaire HTML)
            function (array $value): string {
                if (empty($value)) return '';
                return json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            },
            // string (formulaire HTML) → array (entité)
            function (string $value): array {
                if ($value === '') return [];
                $decoded = json_decode($value, true);
                return is_array($decoded) ? $decoded : [];
            }
        ));

        // ── Transformer waypointsJson : string JSON ↔ array ──────────
        $builder->get('waypointsJson')->addModelTransformer(new CallbackTransformer(
            function (array $value): string {
                if (empty($value)) return '';
                return json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            },
            function (string $value): array {
                if ($value === '') return [];
                $decoded = json_decode($value, true);
                return is_array($decoded) ? $decoded : [];
            }
        ));

        // ── Transformer distanceMeters : string ↔ int|null ───────────
        $builder->get('distanceMeters')->addModelTransformer(new CallbackTransformer(
            function (?int $value): string {
                return $value !== null ? (string) $value : '';
            },
            function (string $value): ?int {
                return $value !== '' ? (int) $value : null;
            }
        ));

        // ── Transformer durationSeconds : string ↔ int|null ──────────
        $builder->get('durationSeconds')->addModelTransformer(new CallbackTransformer(
            function (?int $value): string {
                return $value !== null ? (string) $value : '';
            },
            function (string $value): ?int {
                return $value !== '' ? (int) $value : null;
            }
        ));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Balade::class,
        ]);
    }
}
