import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productServiceFactory } from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const productService = productServiceFactory();

  useEffect(() => {
    productService.getAll().then((result) => setProducts(result));
  }, []);

  const onCreateProductSubmit = async (data) => {
    const newProduct = await productService.create(data);

    setProducts((state) => [...state, newProduct]);

    navigate("/catalog");
  };

  const onProductEditSubmit = async (values) => {
    const result = await productService.edit(values._id, values);

    setProducts((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );

    navigate(`/catalog/${values._id}`);
  };

  const deleteProduct = (productId) =>{
    setProducts(state => state.filter((x) => x._id !== productId))
  }

  const contextValues = {
    products,
    onCreateProductSubmit,
    onProductEditSubmit,
    deleteProduct
  };

  return (
    <ProductContext.Provider value={contextValues}>
        {children}
    </ProductContext.Provider>
  )
};

export const useProductContext = () =>{
    const context = useContext(ProductContext);

    return context;
}