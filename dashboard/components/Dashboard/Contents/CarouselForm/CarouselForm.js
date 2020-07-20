import React, { useState, Component } from "react";
const carousels = [
  {
    image: "/images/heros/hero.jpg",
    title: "Just In: Clarks most trending shoes",
  },
  {
    image: "/images/heros/hero1.jpg",
    title: "Just In: Clarks most trending shoes",
  },
  {
    image: "/images/heros/hero2.jpg",
    title: "Just In: Clarks most trending shoes",
  },
  {
    image: "/images/heros/hero3.jpg",
    title: "Just In: Clarks most trending shoes",
  },
];

import classes from "./CarouselForm.module.css";
class CarouselForm extends Component {
  state = {
    carousels: [
      {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title",
          },
          value: carousels[0].title,
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file",
          },
          value: carousels[0].image,
        },
      },
      {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title",
          },
          value: carousels[1].title,
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file",
          },
          value: carousels[1].image,
        },
      },
      {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title",
          },
          value: carousels[2].title,
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file",
          },
          value: carousels[2].image,
        },
      },
      {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title",
          },
          value: carousels[3].title,
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file",
          },
          value: carousels[3].image,
        },
      },
    ],
  };
  render() {
    return <div className={classes.FormsWrapper}></div>;
  }
}

export default CarouselForm;
