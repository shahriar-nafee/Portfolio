import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../Data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. Its Nafee</h1>
        <p className="pl-desc">this is a p tag. description of mine</p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
