import React from "react";
import { BASE_URL } from "../../utils/fetchProducts";
import "./PetCard.scss";
import { Pet } from "../../types/Pet";

type Props = {
  pet: Pet;
};

export const PetCard: React.FC<Props> = ({ pet }) => {
  return (
    <div className="card">
      <img
        src={`${BASE_URL}/${pet.img}`}
        alt="petPhoto"
        className="card__img"
      />

      <div className="card__icon icon icon-like"></div>

      <div className="card__info">
      <p className="card__name">{pet.name}</p>
      <p className="card__props">
        <div className="card__prop">{pet.sex}</div>
        <div className="card__prop">{`${pet.age} років`}</div>
        <div className="card__prop">{pet.size}</div>
      </p>
      </div>
    </div>
  );
};
