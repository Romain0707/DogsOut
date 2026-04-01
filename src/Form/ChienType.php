<?php

namespace App\Form;

use App\Entity\Chien;
use App\Entity\Race;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChienType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom',
                'attr'  => ['placeholder' => 'Nom de votre chien'],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'attr'  => ['placeholder' => 'Décrivez votre compagnon…', 'rows' => 4],
            ])
            ->add('sexe', ChoiceType::class, [
                'label'    => 'Sexe',
                'choices'  => [
                    '♂ Mâle'   => true,
                    '♀ Femelle' => false,
                ],
                'expanded' => true,   
                'multiple' => false,
            ])
            ->add('birthDate', DateType::class, [
                'label'  => 'Date de naissance',
                'widget' => 'single_text',
            ])
            ->add('race', EntityType::class, [
                'class'        => Race::class,
                'choice_label' => 'name',
                'label'        => 'Race',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Chien::class,
        ]);
    }
}