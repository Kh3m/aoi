import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

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
const carousel = () => {
  const carouselRef = useRef();
  let [counterState, setCounterState] = useState(1);

  useEffect(() => {
    carouselRef.current.style.scrollBehavior = "unset";
    carouselRef.current.scrollBy(carouselRef.current.clientWidth, 0);
  }, []);

  let intervalRef;

  useEffect(() => {
    intervalRef = setInterval(() => {
      setCounterState(++counterState);
      carouselRef.current.scrollTo(
        carouselRef.current.clientWidth * counterState,
        0
      );
    }, 2000);
    return () => {
      clearInterval(intervalRef);
    };
  }, [counterState]);

  const onCarouselScrollHandler = () => {
    carouselRef.current.style.scrollBehavior = "smooth";
    const end =
      carouselRef.current.clientWidth + carouselRef.current.scrollLeft;
    const start = 0;
    // check if we've got to the end of scroll
    if (end + 5 >= carouselRef.current.scrollWidth) {
      carouselRef.current.style.scrollBehavior = "unset";
      carouselRef.current.scrollTo(carouselRef.current.clientWidth, 0);
      setCounterState(1);
    }
    // check if we're at the beginning of scroll
    if (carouselRef.current.scrollLeft === start) {
      carouselRef.current.style.scrollBehavior = "unset";
      carouselRef.current.scrollTo(carouselRef.current.clientWidth * 4, 0);
      setCounterState(4);
    }
  };

  const onPrevHandler = () => {
    setCounterState((p) => setCounterState(p - 1));
    carouselRef.current.scrollTo(
      carouselRef.current.clientWidth * counterState,
      0
    );
  };

  const onNextHandler = () => {
    setCounterState((p) => setCounterState(p + 1));
    carouselRef.current.scrollTo(
      carouselRef.current.clientWidth * counterState,
      0
    );
  };

  const onScrollToPosHandler = (pos) => {
    carouselRef.current.scrollTo(carouselRef.current.clientWidth * pos, 0);
    setCounterState(pos);
  };

  return (
    <div className={styles.Carousel}>
      <div
        className={styles.Carousel__Conatiner}
        ref={carouselRef}
        onScroll={onCarouselScrollHandler}
      >
        <div
          className={[
            styles.Carousel__Content,
            styles.Carousel__Content__Last_Clone,
          ].join(" ")}
        >
          <img src={carousels[0].image} alt="banner" />
          <div className={styles.Message__Card}>
            <h2> {carousels[0].title} </h2>
            <p>{carousels[0].body} </p>
            <button className={styles.Button}>Explore more</button>
          </div>
        </div>

        <div className={styles.Carousel__Content}>
          <img src={carousels[1].image} alt="banner" />
          <div className={styles.Message__Card}>
            <h2> {carousels[1].title} </h2>
            <p>{carousels[1].body} </p>
            <button className={styles.Button}>Explore more</button>
          </div>
        </div>

        <div className={styles.Carousel__Content}>
          <img src={carousels[2].image} alt="banner" />
          <div className={styles.Message__Card}>
            <h2> {carousels[2].title} </h2>
            <p>{carousels[2].body} </p>
            <button className={styles.Button}>Explore more</button>
          </div>
        </div>

        <div className={styles.Carousel__Content}>
          <img src={carousels[3].image} alt="banner" />
          <div className={styles.Message__Card}>
            <h2> {carousels[3].title} </h2>
            <p>{carousels[3].body} </p>
            <button className={styles.Button}>Explore more</button>
          </div>
        </div>

        <div className={styles.Carousel__Content}>
          <img src={carousels[0].image} alt="banner" />
          <div className={styles.Message__Card}>
            <h2> {carousels[0].title} </h2>
            <p>{carousels[0].body} </p>
            <button className={styles.Button}>Explore more</button>
          </div>
        </div>

        <div
          className={[
            styles.Carousel__Content,
            styles.Carousel__Content__First_Clone,
          ].join(" ")}
        >
          <img src={carousels[1].image} alt="banner" />
          <div className={styles.Message__Card}>
            <h2> {carousels[1].title} </h2>
            <p>{carousels[1].body} </p>
            <button className={styles.Button}>Explore more</button>
          </div>
        </div>

        <div className={styles.Carousel__Buttons}>
          <span className={styles.PrevBtn} onClick={onPrevHandler}>
            {" "}
            <img src="/images/next.png" />{" "}
          </span>
          <span className={styles.NextBtn} onClick={onNextHandler}>
            {" "}
            <img src="/images/next.png" />{" "}
          </span>
        </div>
      </div>

      <div className={styles.CircleButtons}>
        <span
          className={[
            styles.First,
            counterState === 1 ? styles.Active : "",
          ].join(" ")}
          onClick={() => onScrollToPosHandler(1)}
        >
          {" "}
          1{" "}
        </span>
        <span
          className={[
            styles.Second,
            counterState === 2 ? styles.Active : "",
          ].join(" ")}
          onClick={() => onScrollToPosHandler(2)}
        >
          {" "}
          2{" "}
        </span>
        <span
          className={[
            styles.Third,
            counterState === 3 ? styles.Active : "",
          ].join(" ")}
          onClick={() => onScrollToPosHandler(3)}
        >
          {" "}
          3{" "}
        </span>
        <span
          className={[
            styles.Fourth,
            counterState === 4 ? styles.Active : "",
          ].join(" ")}
          onClick={() => onScrollToPosHandler(4)}
        >
          {" "}
          4{" "}
        </span>
      </div>
    </div>
  );
};

export default carousel;
