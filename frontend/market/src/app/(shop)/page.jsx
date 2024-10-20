import Brands from "@/components/Brands";
import Catalog from "@/components/Catalog";
import Showcase from "@/components/Showcase";
import Banner from "@/components/Banner";
import Reviews from "@/components/Reviews";

import { catalogData } from "./utils";

export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <Showcase title={"NEW ARRIVALS"} />
      <Showcase title={"top selling"} />
      <Catalog data={catalogData} />
      <Reviews />
    </>
  );
}
