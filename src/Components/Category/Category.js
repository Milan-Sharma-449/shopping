import React from "react";
import { Link } from "react-router-dom";
export default function Category() {
  return (
    <>
      <div className="category-container">
        <Link to="/headphones">
          <div className="category-box">
            <div className="category-image">
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg"
                alt="Headphones"
              />
            </div>
            <div className="category_header">
              <span >Headphones</span>
            </div>
          </div>
        </Link>
        <Link to="/keyboards">
          <div className="category-box">
            <div className="category-image">
              <img
                src="https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png"
                alt="Keyboards"
              />
            </div>
            <div className="category_header">
              <span>Keyboards</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
