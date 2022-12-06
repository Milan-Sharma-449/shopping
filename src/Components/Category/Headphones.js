import React from "react";
import Footer from "../Home/Footer";
import ProductList from "../Home/ProductList";
import Navbar from "../Navbar";
import Category from "./Category";
import data from "../../data";
export default function Headphones() {
  const item = data.map((item) => {
    if (item.category === "xasgy42fa" || item.category === "Headphones") {
      return <ProductList key={item.id} {...item} />;
    }
    return "";
  });
  return (
    <>
      <Navbar />
      <Category />
      <div className="productlist">{item}</div>
      <Footer />
    </>
  );
}
