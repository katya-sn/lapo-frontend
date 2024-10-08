import { useContext } from 'react';
import { BigSectionsHeader } from '../../components/BigSectionsHeader';
import { BreadCrumb } from '../../components/BreadCrumb';
import { MediumButton } from '../../components/Buttons';
import { PhotoSlider } from '../../components/PhotoSlider';
import { BASE_URL } from '../../utils/fetchProducts';
import { team } from '../../utils/team';
import './AboutUsPage.scss';
import { GlobalContext } from '../../context/GlobalContext';

export const AboutUsPage = () => {
  const circlesContent = [
    {
      big: '2023',
      small: 'Рік заснування притулку',
    },
    {
      big: '500+',
      small: 'Котів і собак під опікою',
    },
    {
      big: '200+',
      small: 'Хвостиків знайшли дім',
    },
  ];

  const { scrollToSection } = useContext(GlobalContext);

  return (
    <div className="about">
      <BreadCrumb />

      <div className="about__section">
        <BigSectionsHeader text={['Супер', 'Місія']} />
        <div className="about__texts">
          <h2 className="about__text">
            Врятувати і надати прихисток тваринам, які потребують допомоги.
          </h2>
          <h2 className="about__text">
            Соціалізація, реабілітація та влаштування до люблячих родин.
          </h2>
        </div>

        <PhotoSlider />
        <div className="about__circles">
          {circlesContent.map(circle => (
            <div className="about__circle">
              <p className="about__circle__bigger-text">{circle.big}</p>
              <p className="about__circle__smaller-text">{circle.small}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about__section">
        <BigSectionsHeader text={['Супер', 'Команда']} />
        <div className="about__team">
          {team.map(member => (
            <div className="about__team__card">
              <img src={`${BASE_URL}/${member.photo}`} alt="teamPhoto" className="about__team__img" />
              <div className="about__team__text">
              <p className="about__team__name">{member.name}</p>
              <p className="about__team__position">{member.position}</p>
              </div>
          </div>
          ))}
        </div>
      </div>

      <div className="about__section">
        <BigSectionsHeader text={['Супер', 'Допомога']} />
        <div className="about__help">
          <div className="about__help__item">
            <h4 className="about__help__text">Стати волонтером</h4>
            <MediumButton text='Заповнити анкету' leftIcon={false} rightIcon={true} to='/volonteer' />
          </div>
          <div
            className="about__help__item">
            <h4 className="about__help__text">Допомогти фінансово</h4>
            <MediumButton text='Задонатити' leftIcon={false} rightIcon={true} to='/' onClick={() => scrollToSection('donate')} />
          </div>
        </div>
      </div>
    </div>
  );
};

