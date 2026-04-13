<?php

namespace App\Form;

use App\Entity\BaladeTag;
use App\Entity\Balade;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BaladeTagsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('baladeTags', EntityType::class, [
                'class'         => BaladeTag::class,
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
                    'placeholder' => 'Ex: bord-de-canal, dog-friendly…',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Balade::class,
        ]);
    }
}