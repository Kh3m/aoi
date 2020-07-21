import React from "react";

const product = () => {
  const product = {
    name: "Nike Men Zoom Fly SP",
    images: [
      "/images/p1.jpg",
      "/images/p2.jpg",
      "/images/p3.jpg",
      "/images/p4.jpg",
      "/images/p5.jpg",
      "/images/p6.jpg",
    ],
    price: 49.99,
    sizes: ["Please Select", "UK6", "UK7", "UK7.5", "UK8", "UK8.5"],
  };

  return (
    <div className="product">
      <form>
        <div className="product-wrapper">
          <div className="product-images-wrapper">
            {product.images.map((image, index) => (
              <img src={image} key={index} />
            ))}
          </div>
          <div className="checkout">
            <h2 className="name">{product.name}</h2>
            <h3 className="price">Gift Sale: $ {product.price}</h3>

            <select name="size">
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>
                  Men {size}
                </option>
              ))}
            </select>

            <button className="add-cart">Add to Cart</button>
          </div>
        </div>
      </form>
      <style jsx>{`
        .product {
          width: 100%;
          max-width: 1400px;
          margin: 50px auto;
          position: relative;
        }
        .product-wrapper {
          display: flex;
          justify-content: space-between;
        }
        .product-images-wrapper {
          width: 65%;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .product-images-wrapper img {
          width: 49.5%;
          margin-bottom: 10px;

          //   border-bottom: 1px solid #575757;
        }
        .product-info ul li {
          list-style: disc;
          margin-top: 8px;
        }
        .checkout {
          width: 30%;
          display: flex;
          flex-direction: column;
          //   border: 1px solid;
          align-items: flex-start;
          padding: 20px;
          max-height: 500px;
        }
        .checkout * {
          margin-bottom: 10px;
        }

        .checkout select {
          width: 100%;
          margin-top: 5px;
          padding: 10px;
          border-radius: 5px;
          font-size: 14px;
          color: #575757;
        }
        .price {
          color: #d81e06;
        }
        .add-cart {
          margin-top: 20px;
          background-color: black;
          color: white;
          border-radius: 5px;
          width: 100%;
          padding: 10px 0px;
          text-align: center;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default product;
