import React from "react";
import HeroBox from "../components/HeroBox";
import ProductsCard from "../components/productsCard";

const indexPage = () => {
  const popularProducts = {
    title: "Shoes Reviews",
    products: [
      {
        image: "/images/1.jpg",
      },
      {
        image: "/images/2.jpg",
      },
      {
        image: "/images/3.jpg",
      },
      {
        image: "/images/4.jpg",
      },
      {
        image: "/images/5.jpg",
      },
    ],
  };

  const favoriteProducts = {
    title: "Featured Daily Deals",
    products: [
      {
        title: "Our Comfeist Footwear",
        image: "/images/fdd1.jpg",
        price: "98",
        offPrice: "159",
      },
      {
        title: "Slide Sandals",
        image: "/images/fdd2.jpg",
        price: "89",
        offPrice: "159",
      },

      {
        title: "Sandals for Kids",
        image: "/images/fdd3.jpg",
        price: "97",
        offPrice: "160",
      },
      {
        title: "Our Comfeist Footwear",
        image: "/images/fdd4.jpg",
        price: "98",
        offPrice: "159",
      },
      {
        title: "Slide Sandals",
        image: "/images/fdd5.jpg",
        price: "89",
        offPrice: "159",
      },

      {
        title: "Sandals for Kids",
        image: "/images/fdd6.jpg",
        price: "97",
        offPrice: "160",
      },
      {
        title: "Our Comfeist Footwear",
        image: "/images/fdd7.jpg",
        price: "98",
        offPrice: "159",
      },
      {
        title: "Slide Sandals",
        image: "/images/fdd8.jpg",
        price: "89",
        offPrice: "159",
      },

      {
        title: "Sandals for Kids",
        image: "/images/fdd9.jpg",
        price: "97",
        offPrice: "160",
      },
    ],
  };
  const brandHeaders = {
    title: "Trending Brands",
    products: [
      {
        title: "Clarks",
        image: "/images/headers/clarks.jpg",
      },
      {
        title: "Nike",
        image: "/images/headers/nike.jpg",
      },
      {
        title: "Nike Kids",
        image: "/images/headers/nikekids.jpg",
      },
      {
        title: "Converse",
        image: "/images/headers/converse.jpg",
      },
      {
        title: "UGG",
        image: "/images/headers/ugg.jpg",
      },
      {
        title: "Brooks",
        image: "/images/headers/brooks.jpg",
      },
    ],
  };

  return (
    <React.Fragment>
      <HeroBox />
      <ProductsCard
        productsList={popularProducts}
        flexBasis="20%"
        shadow={true}
        type="small"
      />
      <ProductsCard
        productsList={favoriteProducts}
        flexBasis="33%"
        shadow={false}
        type="large"
      />
      <ProductsCard
        productsList={brandHeaders}
        flexBasis="16%"
        shadow={true}
        type="small"
      />
    </React.Fragment>
  );
};

export default indexPage;
