import React from "react";
import Banner from "../../Banner";
import BannerBottom from "../../BannerBottom";
import OfferPrice from "../../OfferPrice";
import Arrivals from "../../Arrivals";
import BestSeller from "../../BestSeller";
import Banner02 from "../../Banner02";
import SpecialOffers from "../../SpecialOffers";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerBottom />
      <OfferPrice />
      <Arrivals />
      <BestSeller />
      <Banner02 />
      <SpecialOffers />
    </div>
  );
};

export default Home;
