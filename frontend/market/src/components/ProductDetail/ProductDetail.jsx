"use client";

import { useEffect, useState } from "react";
import css from "./style.module.css"
import axios from "axios";
import ProductShowcase from "./ProductShowcase"
import ProductTabs from "./ProductTabs/ProductTabs";
import SimilarProducts from "./SimilarProducts";
import Showcase from "../Showcase";

const ProductDetail = ({ category, sex, id }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/${category}/${sex}/${id}/`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    getProduct();
  }, [category, sex, id]);

  useEffect(() => {
    console.log("Updated product state:", product);
  }, [product]);

  console.log(JSON.stringify(product, null, 2));

  return (
    <section className={css.product}>
      <div className="container">
        <div className={css.product__inner}>
          <ProductShowcase product={product} />
          <ProductTabs product={product} />
          <SimilarProducts product={product}/>
          <Showcase isButton={false} />
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
