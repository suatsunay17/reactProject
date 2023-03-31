import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (name, price,imageUrl) => {
    setItems((prevState) => [...prevState, { name, price,imageUrl }]);
    setTotal(prevTotal => prevTotal += Number(price))
  };
  return (
    <CartContext.Provider value={{ items,total, addToCart}}>{children}</CartContext.Provider>
  );
}
