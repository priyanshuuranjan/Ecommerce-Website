import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// Define your reducer and initial state
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_PRODUCTS":
      return { ...state, loading: false, products: action.payload };
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
};

const initialState = { loading: false, products: [] };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log(
        "🚀 ~ file: productcontex.js ~ line 18 ~ getProducts ~ products",
        products
      );
      dispatch({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
