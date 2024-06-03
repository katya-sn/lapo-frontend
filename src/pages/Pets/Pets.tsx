import './Pets.scss';
import { BigSectionsHeader } from '../../components/BigSectionsHeader';
import { BreadCrumb } from '../../components/BreadCrumb';
import { PetsList } from '../../components/PetsList';

export const Pets = () => {

  return (
    <div className="pets">
      <BreadCrumb title='Знайти друга' />
      <BigSectionsHeader text={['Супер', 'Друзі']} />
      <PetsList />
    </div>
  )
}