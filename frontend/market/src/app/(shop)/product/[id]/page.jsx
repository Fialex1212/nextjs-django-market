import Product from "@/components/Product";

export default async function ProductPage({ params }) {
  const { id } = params;
    <Product id={id} />
}
