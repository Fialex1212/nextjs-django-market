"use client";

import { useParams } from "next/navigation";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
  const params = useParams();
  const { category, sex, id } = params;
  return(
    <>
      <ProductDetail category={category} sex={sex} id={id} />
    </>
  )
};

export default ProductDetailPage;