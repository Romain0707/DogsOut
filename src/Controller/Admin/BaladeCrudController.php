<?php

namespace App\Controller\Admin;

use App\Entity\Balade;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class BaladeCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Balade::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('user','Créer par',)->setFormTypeOptions([
                'by_reference' => true,
                'multiple' => false,
                'choice_label' => 'username',
            ]),
            TextField::new('title'),
            TextEditorField::new('description'),
            NumberField::new('distanceMeters'),
            NumberField::new('durationSeconds'),
            BooleanField::new('isPublic'),
            ImageField::new('snapshotPath')->hideOnForm(),
        ];
    }
}
