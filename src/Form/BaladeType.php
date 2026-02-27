<?php

namespace App\Form;

use App\Entity\Balade;
use App\Entity\User;
use App\Form\DataTransformer\JsonToArrayTransformer;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BaladeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('isPublic')
            ->add('routeGeoJson', HiddenType::class, [
                'required' => false
            ])
            ->add('waypointsJson', HiddenType::class, [
                'required' => false
            ])
            ->add('distanceMeters', HiddenType::class, ['required' => false])
            ->add('durationSeconds', HiddenType::class, ['required' => false])
        ;

        $builder->get('routeGeoJson')->addModelTransformer(new JsonToArrayTransformer());
        $builder->get('waypointsJson')->addModelTransformer(new JsonToArrayTransformer());
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Balade::class,
        ]);
    }
}
