import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price,imageUrl) => {
    setItems((prevState) => [...prevState, { name, price,imageUrl }]);
  };

  const removeFromCart = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <CartContext.Provider value={{ items, addToCart,removeFromCart}}>{children}</CartContext.Provider>
  );
}
