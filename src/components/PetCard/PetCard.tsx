import React from "react";
import "./PetCard.scss";
import { Pet } from "../../types/Pet";
import { Link, useLocation } from "react-router-dom";
import { BASE_URL } from "../../utils/fetchProducts";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import * as likedActions from "../../features/likedSlice";
import { isAnimalLiked } from "../../api/likedApi";
import classNames from "classnames";
import { getAbsolutePath } from "../../utils/getAbsolutePath";

type Props = {
  pet: Pet;
};

export const PetCard: React.FC<Props> = ({ pet }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { likedPets } = useAppSelector(state => state.likedPets);
  const isLiked = isAnimalLiked(likedPets, pet.category, pet.id);

  const handleLikeClick = () => {
    if (!isLiked) {
      dispatch(likedActions.addPet(pet))
    } else {
      dispatch(likedActions.removePet(pet))
    }
  }

  const renderHeartPath = () => {
    return !isLiked ? <path
            d="M12.001 4.529C13.1436 3.5062 14.6345 2.95987 16.1674 3.00228C17.7003 3.04468 19.1587 3.6726 20.243 4.757C21.3264 5.84019 21.9543 7.29675 21.9982 8.82809C22.0421 10.3594 21.4986 11.8496 20.479 12.993L11.999 21.485L3.52102 12.993C2.50028 11.849 1.95623 10.3576 2.00056 8.82499C2.04489 7.29241 2.67425 5.83495 3.75942 4.75183C4.84459 3.66871 6.30323 3.04211 7.83589 3.00067C9.36854 2.95923 10.8589 3.5061 12.001 4.529ZM18.827 6.17C18.1046 5.44813 17.1333 5.03008 16.1125 5.00163C15.0916 4.97318 14.0985 5.33648 13.337 6.017L12.002 7.215L10.666 6.018C9.90769 5.33989 8.91949 4.9762 7.90249 5.00092C6.88549 5.02565 5.91612 5.43694 5.19164 6.1511C4.46716 6.86526 4.04201 7.82862 4.0027 8.84516C3.96338 9.8617 4.31286 10.855 4.98002 11.623L12 18.654L19.02 11.624C19.6844 10.8594 20.0339 9.87124 19.9981 8.85898C19.9623 7.84671 19.5438 6.88572 18.827 6.17Z"
            fill="currentColor"
          /> : <path d="M12.001 4.52894C13.1436 3.50614 14.6345 2.95981 16.1674 3.00221C17.7003 3.04462 19.1587 3.67254 20.243 4.75694C21.3264 5.84013 21.9543 7.29669 21.9982 8.82803C22.0421 10.3594 21.4986 11.8495 20.479 12.9929L11.999 21.4849L3.52102 12.9929C2.50028 11.8489 1.95623 10.3575 2.00056 8.82492C2.04489 7.29235 2.67425 5.83489 3.75942 4.75177C4.84459 3.66865 6.30323 3.04205 7.83589 3.00061C9.36854 2.95917 10.8589 3.50604 12.001 4.52894Z" fill="#FF5631"/>
  }
  
  return (
    <div className="card" key={pet.name}>
      <Link to={getAbsolutePath(location.pathname, pet.category, pet.id)}>
        <img
          src={`${BASE_URL}${pet.photo}`}
          alt="petPhoto"
          className="card__img"
        />
      </Link>

      <button
        className={classNames("card__like", {
          "card__like--active": isLiked,
        })}
        onClick={handleLikeClick}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill= 'none'
          xmlns="http://www.w3.org/2000/svg"
        >
          {renderHeartPath()}
        </svg>
      </button>

      <div className="card__info">
        <p className="card__name">{pet.name}</p>
        <div className="card__props">
          <div className="card__prop">{pet.sex}</div>
          <div className="card__prop">{pet.age}</div>
          {pet.size && <div className="card__prop">{pet.size.split(' ')[0]}</div>}
        </div>
      </div>
    </div>
  );
};
