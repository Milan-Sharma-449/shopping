import CartContext from "./cartContext";
import { useState, useEffect } from "react";

const CartState = (props) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const cartlength = cart.length;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const cartlength = cart.length;
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, cartlength }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
