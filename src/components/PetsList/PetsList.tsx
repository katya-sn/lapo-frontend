import { Pet } from '../../types/Pet';
import { PetCard } from '../PetCard';
import './PetsList.scss';

export const PetsList = () => {
  const examplePet: Pet = {
    name: 'Барбос',
    img: 'img/cardPhoto.png',
    sex: 'Хлопчик',
    age: '5',
    size: 'Великий',
    sterilization: true,
  };

  return (
    <div className="list">
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
      <PetCard pet={examplePet} />
    </div>
  )
}