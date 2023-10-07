import React from "react";
import HeroSection from "../../components/HeroSection";
import Services from "../../components/Services";
import FeatureProduct from "../../components/FeatureProduct";
// import Trusted from "../../components/Trusted";

const Home = () => {
  const data = {
    name: "Fertilizer store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      {/* <Trusted /> */}
    </>
  );
};

export default Home; 