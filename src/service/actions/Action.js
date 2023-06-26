export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const SET_PRODUCTS = "SET_PRODUCTS";

// Action
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const addToFavorites = (product) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: product,
  };
};
export const setProducts = (product) => {
  return {
    type: SET_PRODUCTS,
    payload: product,
  };
};
