<?php

namespace App\Form;

use App\Entity\ChienTag;
use App\Entity\Chien;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChienTagsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('chienTags', EntityType::class, [
                'class'         => ChienTag::class,
                'choice_label'  => 'name',
                'multiple'      => true,
                'expanded'      => true,
                'required'      => false,
                'label'         => 'Tags prédéfinis',
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
                    'placeholder' => 'Ex: hyperactif, peureux-des-voitures…',
                ],
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