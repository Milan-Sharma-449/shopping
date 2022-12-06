import React,{useContext} from 'react'
import Navbar from '../Navbar'
import cartContext from '../../context/cartContext';
import CartUi from './CartUi';
import Footer from '../Home/Footer';

export default function Cart() {

  const context = useContext(cartContext)
  const { cart } = context;
  
 
  const item = cart.map((item) => {
    return <CartUi key={item.id} {...item}  />
  })

  return (
    <>
      <Navbar />
      <div className="productlist">{item}</div>
      <Footer />
    </>
  );
}
