import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../Data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. Its Nafee</h1>
        <p className="pl-desc">
          I'm a big believer in learning by doing and having fun. I shift the
          focus from <b>"How?"</b> and the <b>"Why?"</b> to <b>"What?"</b> to
          produce fun, whimsical demos to learn from.
        </p>
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
