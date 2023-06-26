import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  addToCart,
  addToFavorites,
  setProducts,
} from "../service/actions/Action";

const ProductList = ({ products, addToCart, addToFavorites, setProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const productsData = response.data.products;
      addToProductList(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToProductList = (products) => {
    setProducts(products);
  };

  return (
    <div>
      <h2>ProductList</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              {product.title} - {product.price}
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToFavorites(product)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.main.products,
  cart: state.main.cart,
  favorites: state.main.favorites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFavorites: (product) => dispatch(addToFavorites(product)),
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
