
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
  } from "./productSlice";
  import axios from 'axios'
  
 
  
  export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  };
  
  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      // const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };
  

  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await axios.post(`http://localhost:5000/api/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };