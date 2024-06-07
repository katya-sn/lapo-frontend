import './Pets.scss';
import { BigSectionsHeader } from '../../components/BigSectionsHeader';
import { BreadCrumb } from '../../components/BreadCrumb';
import { PetsList } from '../../components/PetsList';
import { Filter } from '../../components/Filter';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/getSearchWith';

export const Pets = () => {
  return (
    <div className="pets">
      <BreadCrumb title='Знайти друга' />
      <BigSectionsHeader text={['Супер', 'Друзі']} />
      <Filter />
      <PetsList />
    </div>
  )
}