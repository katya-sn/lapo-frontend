import React from "react";
import { MediumButton } from "../Buttons";
import "./Favourites.scss";
import { BASE_URL } from "../../utils/fetchProducts";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import * as likedActions from '../../features/likedSlice';
import { Link } from "react-router-dom";
import { getAbsolutePath } from "../../utils/getAbsolutePath";

type Props = {
  closeBar: () => void;
};

export const Favourites: React.FC<Props> = ({ closeBar }) => {
  const dispatch = useAppDispatch();
  const { likedPets } =
    useAppSelector((state) => state.likedPets);
  
  const getSrc = (photo: string | string[]) => {
    if (Array.isArray(photo)) {
      return `${BASE_URL}${photo[0]}`;
    }

    return `${BASE_URL}${photo}`
  }

  return (
    <aside>
      <div className="overlay" />
      <div className="favs">
        <div className="favs__top">
          <h4 className="favs__title">Обрані хвостики</h4>
          <button className="favs__icon" onClick={closeBar}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99998 7.11599L15.6 0.515991L17.4853 2.40132L10.8853 9.00133L17.4853 15.6013L15.5986 17.4867L8.99865 10.8867L2.39998 17.4867L0.514648 15.6L7.11465 8.99999L0.514648 2.39999L2.39998 0.517324L8.99998 7.11599Z"
                fill="#FF5631"
              />
            </svg>
          </button>
        </div>
        <div className="favs__content">
          {likedPets.length > 0 ? (
            <ul className="favs__items">
              {likedPets.map((pet) => (
                <li className="favs__item" key={pet.name}>
                  <Link to={getAbsolutePath(pet.category, pet.category, pet.id)} onClick={closeBar}>
                    <img
                      loading="lazy"
                    src={getSrc(pet.photo)}
                    alt="petPhoto"
                    className="favs__item__img"
                  />
                  </Link>
                  <div className="favs__item__info">
                    <p className="favs__item__name">{pet.name}</p>
                    <div className="favs__item__props">
                      {pet.name}, {pet.age}
                    </div>
                  </div>
                  <div className="favs__item__footer">
                    <MediumButton
                      to="adopt"
                      onClick={closeBar}
                      leftIcon={false}
                      rightIcon={true}
                      text="Усиновити"
                      height="40"
                      width="155"
                    />
                    <button className="favs__icon" onClick={() => dispatch(likedActions.removePet(pet))}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="favs__empty">
              <span className="favs__empty__text">
                Поки що в тебе немає обраних тваринок :({" "}
              </span>
              <div className="favs__empty__button" onClick={closeBar}>
                <MediumButton
                  leftIcon={false}
                  rightIcon={true}
                  text="Знайти друзів"
                  to="/pets"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
