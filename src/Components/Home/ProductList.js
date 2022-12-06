import React, { useContext } from "react";
import cartContext from "../../context/cartContext";

export default function ProductList(props) {
  const context = useContext(cartContext);
  const { cart, setCart } = context;
  const addProduct = (id) => {
    const value2 = id;
    const index = cart.findIndex((object) => object.id === value2.id);

    if (index === -1) {
      setCart(cart.concat(id));
    }
  };

  return (
    <>
      <div className="product_container">
        <div className="prod_img">
          <img src={props.image} alt="" />
        </div>
        <div className="prod_name">{props.name}</div>
        <div className="prod_price">{props.currency} {props.price}</div>
        <div className="Availablity" >
            <button className="add_to_cart" onClick={() => addProduct(props)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
