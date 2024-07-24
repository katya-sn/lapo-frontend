import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pet } from "../types/Pet"

type likedState = {
  likedPets: Pet[],
  loading: boolean,
  hasError: boolean,
}

const loadStateFromLocalStorage = (): likedState => {
  const likedPets = JSON.parse(localStorage.getItem('pets') || '[]');
  return {
    likedPets,
    loading: false,
    hasError: false,
  };
};

const initialState: likedState = loadStateFromLocalStorage();

const likedSlice = createSlice({
  name: 'liked',
  initialState: initialState,
  reducers: {
    addPet(state, action: PayloadAction<Pet>) {
      state.likedPets.push(action.payload);
      localStorage.setItem('pets', JSON.stringify(state.likedPets));
    },
    removePet(state, action: PayloadAction<Pet>) {
      state.likedPets = state.likedPets.filter(pet => pet.id !== action.payload.id || pet.category !== action.payload.category);
      localStorage.setItem('pets', JSON.stringify(state.likedPets));
    },
    getPets(state) {
      const pets = JSON.parse(localStorage.getItem('pets') || '[]');
      state.likedPets = pets;
    }
  },
});

export default likedSlice.reducer;

export const {
  addPet,
  removePet,
  getPets
} = likedSlice.actions;