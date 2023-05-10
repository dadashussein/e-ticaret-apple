import { createContext, useState, useEffect, useContext } from "react";
import Pulse from "../components/animation/Pulse";
const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

const SERVER = import.meta.env.VITE_SERVER;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(SERVER);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <>
        <Pulse />
      </>
    );
  }

  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
