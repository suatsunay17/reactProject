import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price,imageUrl) => {
    setItems((prevState) => [...prevState, { name, price,imageUrl }]);
  };
  return (
    <CartContext.Provider value={{ items, addToCart}}>{children}</CartContext.Provider>
  );
}
