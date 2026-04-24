<?php

namespace App\Form;

use App\Entity\BaladeImage;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class BaladeImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('imageFile', VichImageType::class, [
                'label'         => false,
                'required'      => false,
                'allow_delete'  => false,
                'download_uri'  => false,
                'image_uri'     => false,
                'attr'          => ['accept' => 'image/*'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => BaladeImage::class,
        ]);
    }
}
