import { Link, NavLink } from 'react-router-dom';
import { SectionsHeader } from '../SectionsHeader';
import './Categories.scss';
import { BASE_URL } from '../../utils/fetchProducts';
import { BigButton } from '../Buttons';

export const Categories = () => {
  const categories = [
    {
      title: 'Песики',
      img: 'img/dogCategory.png',
      class: 'dogs',
    }, 
    {
      title: 'Котики',
      img: 'img/catCategory.png',
      class: 'cats',
    }
  ]
  return (
    <div className="categories">
      <SectionsHeader text='Вони дуже чекають на тебе' />
      <div className="categories__content">
        {categories.map(category => (
          <Link to={`/pets/${category.class}`} className="categories__category" key={category.title} >
            <div className="categories__category__title">{category.title}</div>
            <div className="categories__category__photo">
              <img loading="lazy" src={`${BASE_URL}/${category.img}`} alt="categoryImg" className={`categories__category__${category.class}`} />
            </div>
          </Link>
        ))}
      </div>
      <div className="categories__footer">
        <BigButton to='/pets' leftIcon={false} rightIcon={true} text='Переглянути всіх хвостиків притулку' />
      </div>
    </div>
  )
}