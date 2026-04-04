<?php

namespace App\Form;

use App\Entity\Balade;
use App\Entity\GroupEvent;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class GroupEventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('balade', EntityType::class, [
                'class'        => Balade::class,
                'choice_label' => 'title',
                'label'        => 'Balade',
                'placeholder'  => 'Choisissez une balade…',
                'constraints'  => [new NotBlank(message: 'Veuillez choisir une balade.')],
            ])
            ->add('eventDate', DateTimeType::class, [
                'label'  => 'Date et heure',
                'widget' => 'single_text',
                'constraints' => [new NotBlank(message: 'La date est obligatoire.')],
            ])
            ->add('description', TextareaType::class, [
                'label'    => 'Description (optionnel)',
                'required' => false,
                'attr'     => [
                    'placeholder' => 'Informations supplémentaires sur l\'événement…',
                    'rows'        => 3,
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => GroupEvent::class,
        ]);
    }
}