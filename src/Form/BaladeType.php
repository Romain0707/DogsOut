<?php

namespace App\Form;

use App\Entity\Balade;
use App\Entity\BaladeTag;
use App\Form\BaladeImageType;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
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

            ->add('difficulty', HiddenType::class, [
                'required' => false,
            ])

            ->add('baladeTags', EntityType::class, [
                'class'         => BaladeTag::class,
                'choice_label'  => 'name',
                'multiple'      => true,
                'expanded'      => true,
                'required'      => false,
                'label'         => 'Tags',
                'by_reference'  => false,
                'query_builder' => fn(EntityRepository $er) => $er
                    ->createQueryBuilder('t')
                    ->where('t.isPreset = true')
                    ->orderBy('t.name', 'ASC'),
            ])

            ->add('customTag', TextType::class, [
                'label'    => 'Ajouter un tag personnalisé',
                'required' => false,
                'mapped'   => false,
                'attr'     => [
                    'placeholder' => 'Ex: bord-de-canal, dog-friendly…',
                ],
            ])

            ->add('images', CollectionType::class, [
                'label'        => 'Photos',
                'entry_type'   => BaladeImageType::class,
                'allow_add'    => true,
                'allow_delete' => true,
                'by_reference' => false,
                'required'     => false,
                'attr'         => ['class' => 'balade-images-collection'],
            ])

            ->add('routeGeoJson', HiddenType::class, ['required' => false])
            ->add('waypointsJson', HiddenType::class, ['required' => false])
            ->add('distanceMeters', HiddenType::class, ['required' => false])
            ->add('durationSeconds', HiddenType::class, ['required' => false])
        ;

        $builder->get('routeGeoJson')->addModelTransformer(new CallbackTransformer(
            fn(array $v): string => empty($v) ? '' : json_encode($v, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            fn(string $v): array => $v === '' ? [] : (is_array($d = json_decode($v, true)) ? $d : [])
        ));

        $builder->get('waypointsJson')->addModelTransformer(new CallbackTransformer(
            fn(array $v): string => empty($v) ? '' : json_encode($v, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            fn(string $v): array => $v === '' ? [] : (is_array($d = json_decode($v, true)) ? $d : [])
        ));

        $builder->get('distanceMeters')->addModelTransformer(new CallbackTransformer(
            fn(?int $v): string  => $v !== null ? (string) $v : '',
            fn(string $v): ?int  => $v !== '' ? (int) $v : null
        ));

        $builder->get('durationSeconds')->addModelTransformer(new CallbackTransformer(
            fn(?int $v): string  => $v !== null ? (string) $v : '',
            fn(string $v): ?int  => $v !== '' ? (int) $v : null
        ));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Balade::class,
        ]);
    }
}