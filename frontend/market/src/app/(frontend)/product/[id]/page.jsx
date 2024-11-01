import Product from "@/components/ProductDetail/ProductDetail";

export default async function ProductPage({ params }) {
  const { id } = params;
    <Product id={id} />
}
