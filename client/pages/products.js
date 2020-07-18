import React from "react";
import Spacer from "../components/Spacer";
import ProductAttribute from "../components/ProductFeature";
import ProductsInfo from "../components/productInfo";
const products = () => {
  // Generate Product Sizes
  const filter = [
    "Sandals",
    "Sneakers",
    "Loafers",
    "Boat Shoes",
    "Oxfords",
    "Boots & Chukkas",
    "Slip-Ons",
    "Slippers",
    "Run Shop",
    "Spring Trend",
    "Outdoor",
    "Walking",
    "Athletic",
    "Food Health & Wellness",
    "Casual",
    "Dress/Evening",
  ];
  const productsInfos = [
    {
      name: "Air Zoom Pegasus 37",
      brand: "Nike",
      price: "120.00",
      image: "/images/airzoom.jpg",
    },
    {
      name: "Libron Whitness",
      brand: "Nike",
      price: "57.33",
      image: "/images/running.jpg",
    },
    {
      name: "Flex Experience Run 9",
      brand: "Nike",
      price: "65.00",
      image: "/images/flex.jpg",
    },

    {
      name: "Revolution 5",
      brand: "Nike",
      price: "65.00",
      image: "/images/revolution.jpg",
    },
    {
      name: "Cloudfeel Knit Slip-On Sneaker",
      brand: "Cole Haan",
      price: "100.00",
      image: "/images/cloudfeel.jpg",
    },
    {
      name: "Pinch Penny",
      brand: "Cole Haan",
      price: "126.40",
      image: "/images/pinch.jpg",
    },
    {
      name: "Howland Penny",
      brand: "Cole Haan",
      price: "79.95",
      image: "/images/howland.jpg",
    },
    {
      name: "Hayes Penny Loafer",
      brand: "Cole Haan",
      price: "89.95",
      image: "/images/hayes.jpg",
    },
    {
      name: "Cloudfeel Knit Slip-On Sneaker",
      brand: "Cole Haan",
      price: "100.00",
      image: "/images/cloudfeel.jpg",
    },
    {
      name: "Pinch Penny",
      brand: "Cole Haan",
      price: "126.40",
      image: "/images/pinch.jpg",
    },
    {
      name: "Howland Penny",
      brand: "Cole Haan",
      price: "79.95",
      image: "/images/howland.jpg",
    },
    {
      name: "Hayes Penny Loafer",
      brand: "Cole Haan",
      price: "89.95",
      image: "/images/hayes.jpg",
    },
  ];
  return (
    <div className="products">
      {/* Begining of Product Main Body */}
      <div className="products-main">
        {/* Begining of Filter Section */}
        <div className="products-filter-wrapper">
          <h3>Filters</h3>
          <div className="products-filter">
            <ul>
              {filter.map((filterItem, index) => (
                <li key={index}>{filterItem}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* End of Filter Section */}

        {/* Begining of Product Selections */}
        <div className="product-selections-wrapper">
          <h3>Your Selections</h3>

          <div className="product-selections">
            {productsInfos.map((productInfo, index) => (
              <ProductsInfo product={productInfo} />
            ))}
          </div>
        </div>
        {/* End of Product Selections */}
      </div>
      {/* End of Product Main Body */}
      <style jsx>{`
        .products {
          width: 100%;
          max-width: 1400px;
          margin: 30px auto 0px auto;
        }

        .product-header {
          display: flex;
          align-items: center;
        }
        .product-title h1 {
          font-weight: 400;
        }
        .product-header h3 {
          font-weight: 400;
        }
        .products select {
          margin-top: 5px;
          font-size: 16px;
          border-radius: 5px;
        }

        .products-main {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 30px;
        }
        .page-caption {
          width: 100%;
          min-height: 50px;
          background-color: #eee;
          display: flex;
          align-items: center;
          padding: 0px 8px;
          color: #0654b3;
        }
        .products-filter-wrapper {
          width: 264px;
          // border: 1px solid #ddd;
        }
        .products-filter {
          margin-top: 20px;
          width: 100%;
        }
        .product-selections-wrapper {
          flex-basis: 80%;
        }
        .product-selections {
          width: 100%;
          display: flex;
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
      `}</style>
    </div>
  );
};

export default products;
