"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

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
    <div>
        <Image src={`http://127.0.0.1:8000/${product.image}`}  alt={product.title} width={100} height={100} />
      <h2>Product Category: {product.category}</h2>
      <h2>Sex: {product.sex}</h2>
      <p>Product ID: {product.id}</p>
    </div>
  );
};
export default ProductDetail;
