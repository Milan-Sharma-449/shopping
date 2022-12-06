import React,{useState,useContext} from 'react'
import cartContext from "../../context/cartContext";
export default function CartUi(props) {
  

const context = useContext(cartContext);
  const { cart, setCart } = context;
  
  const removeProduct = (id) => {
      const newList = cart.filter((item) => item.id !== id.id);
      
      setCart(newList);
 
};


  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
   setQuantity(event.target.value);

 };
 

  return (
    <>
      <div className="product_container">
        <div className="prod_img">
          <img src={props.image} alt="" />
        </div>
        <div className="prod_name">{props.name}</div>
        <div className="prod_price">{props.currency} {props.price * quantity}</div>
        <div className="prod_qty">
          <label htmlFor="quantity">Qty: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min={1}
            max={10}
            onChange={handleChange}
            value={quantity}
            style={{ width: "2.8rem", marginBottom: "0.5rem" }}
          />
        </div>
        <button className="add_to_cart" onClick={() => removeProduct(props)}>
          Remove
        </button>
      </div>
    </>
  );
}

