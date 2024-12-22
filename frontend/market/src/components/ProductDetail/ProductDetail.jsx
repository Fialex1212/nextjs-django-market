"use client";

import { useEffect, useState } from "react";
import css from "./style.module.css"
import Image from "next/image";
import axios from "axios";
import ProductShowcase from "./ProductShowcase"
import ProductTabs from "./ProductTabs";
import SimilarProducts from "./SimilarProducts";

const ProductDetail = ({ category, sex, id }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/${category}/${sex}/${id}/`
        );
        setProduct(response.data[0]);
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
          <ProductTabs />
          <SimilarProducts />
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
