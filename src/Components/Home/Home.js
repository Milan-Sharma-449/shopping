import React from "react";
import Category from "../Category/Category";
import Navbar from "../Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";
import data from "../../data";

export default function Home() {
  const item = data.map((item) => {
    return <ProductList key={item.id} {...item} />;
  });
  return (
    <div className="home">
      <Navbar />
      <Category />
      <div className="productlist">{item}</div>
      <Footer />
    </div>
  );
}
