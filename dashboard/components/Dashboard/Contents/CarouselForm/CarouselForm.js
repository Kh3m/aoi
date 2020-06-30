import React, { useState } from "react";

import classes from "./CarouselForm.module.css";
const carouselForm = () => {
    const [selectedCarousel, setSelectedCarousel] = useState(null);


  const carousels = [
    {
      image: "/images/heros/hero.jpg",
      title: "Just In: Clarks most trending shoes",
      body: "Get yours with just a few clicks",
    },
    {
      image: "/images/heros/hero1.jpg",
      title: "Just In: Clarks most trending shoes",
      body: "Get yours with just a few clicks",
    },
    {
      image: "/images/heros/hero2.jpg",
      title: "Just In: Clarks most trending shoes",
      body: "Get yours with just a few clicks",
    },
    {
      image: "/images/heros/hero3.jpg",
      title: "Just In: Clarks most trending shoes",
      body: "Get yours with just a few clicks",
    },
  ];

  const carouselSelectHandler = (index) => {
        
  }

  return (
    <div className={classes.FormsWrapper}>
      <div className={classes.Form}>
        <h2>Carousels List</h2>
        <div>
          {carousels.map((carousel, index) => (
            <div className={classes.display}>
              <div>
                <img src={carousel.image} />
              </div>
              <div>{carousel.title}</div>
              <div>{carousel.body}</div>
              <button>Update</button>
            </div>
          ))}
        </div>
        <h2>Update Carousel</h2>
        <form>
          {/* {props.type == "Update Product" ? <} */}
          <div>
            <input type="text" placeholder="Carousel Title" />
            <input type="text" placeholder="Carousel Caption" />
          </div>

          <div>
            <input type="file" />
          </div>
          <input type="submit" value="Update Carousel" />
        </form>
      </div>
    </div>
  );
};

export default carouselForm;
