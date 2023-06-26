import { ADD_TO_CART, ADD_TO_FAVORITES, SET_PRODUCTS } from "../actions/Action";

const initialState = {
  products: [],
  cart: [],
  favorites: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
