import {
    ADDFAVORITE,
    DELETEFAVORITE,
    FILTER,
    ORDER,
    RESET,
  } from "../Actions/Types";
  
  const initialGlobalState = {
    favorites: [],
    allCharacters: [],
    access: false,
    aunMas: [],
    detail: {},
  };
  
  export default function rootReducer(state = initialGlobalState, action) {
    
    switch (action.type) {
      case ADDFAVORITE:
        return {
          ...state,
          favorites: action.payload,
          allCharacters: action.payload,
        };
  
      case DELETEFAVORITE:
        return {
          ...state,
          favorites: action.payload,
          allCharacters: action.payload,
        };
  
      case FILTER:
        return {
          ...state,
          favorites: state.allCharacters.filter(
            (pj) => pj.gender === action.payload
          ),
        };
      case ORDER:
        
  
        let copy = state.favorites.sort((a, b) => {
          if (action.payload === "A") {
            // ordenar de menor a mayor
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
            return 0; // Si son iguales, no los muevo de posición.
          } else {
            // ordenar de mayor a menor
            if (a.id > b.id) return -1;
            if (b.id > a.id) return 1;
            return 0; // Si son iguales, no los muevo de posición.
          }
        });
  
        return {
          ...state,
          favorites: copy,
        };
  
      case RESET:
        return { ...state, favorites: state.allCharacters };
      default:
        return { ...state };
    }
  }
  
