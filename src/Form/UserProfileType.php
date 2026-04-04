<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichImageType;

class UserProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('imageFile', VichImageType::class, [
                'label'             => 'Photo de profil',
                'required'          => false,
                'allow_delete'      => false,
                'download_uri'      => false,
                'image_uri'         => false,
                'attr'              => ['accept' => 'image/*'],
            ])
            ->add('username', TextType::class, [
                'label' => 'Pseudo',
                'constraints' => [
                    new NotBlank(message: 'Ce champ ne peut pas être vide.'),
                    new Length(
                        min: 5, max: 30,
                        minMessage: 'Minimum {{ limit }} caractères.',
                        maxMessage: 'Maximum {{ limit }} caractères.',
                    ),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
            ])
            ->add('firstname', TextType::class, [
                'label'    => 'Prénom',
                'required' => false,
                'attr'     => ['placeholder' => 'Votre prénom'],
            ])
            ->add('lastname', TextType::class, [
                'label'    => 'Nom',
                'required' => false,
                'attr'     => ['placeholder' => 'Votre nom'],
            ])
            ->add('description', TextareaType::class, [
                'label'    => 'À propos',
                'required' => false,
                'attr'     => [
                    'placeholder' => 'Parlez de vous…',
                    'rows'        => 4,
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}