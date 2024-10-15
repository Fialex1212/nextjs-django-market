"use client";

import { useState } from "react";
import css from "./style.module.css";
import axios from "axios";

const Product = ({ id }) => {
  const [productData, setProductData] = useState();

  const LOCAL_ADDRESS = process.env.API;

  const getProduct = async (id) => {
    try {
      const response = await axios.get(
        `${LOCAL_ADDRESS}products/products/${id}/`
      );
      console.log(response.data);
      setProductData(response.data);
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Something went wrong: ", error);
      return <div>Product not found</div>;
    }
  };

  useEffect((
    getProduct(id)
  ), [])

  return (
    <section>
      <div>
        {productData.map((item) => {
          const {
            id,
            title,
            img,
            price,
            discound,
            new_price,
            description,
            colors,
            sizes,
            category,
          } = item;
          return (
            <p>{id}</p>
          )
        })} 
      </div>
      text
    </section>
  );
};

export default Product;
