import Brands from "@/components/Brands";
import Catalog from "@/components/Catalog";
import Showcase from "@/components/Showcase";
import Banner from "@/components/Banner";
import Reviews from "@/components/Reviews";
import { catalogData } from "./utils";

const Home = () => {
  return (
    <>
      <Banner />
      <Brands />
      <Showcase title={"NEW ARRIVALS"} isButton={true} />
      <Showcase title={"top selling"} isButton={true} />
      <Catalog data={catalogData} />
      <Reviews />
    </>
  );
};

export default Home;
