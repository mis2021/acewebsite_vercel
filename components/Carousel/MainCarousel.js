import React from "react";
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function MainCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      // breakpoint: { max: 4000, min: 3000 },
      breakpoint: { max: 500, min: 700 },
      items: 1
    },
    desktop: {
      // breakpoint: { max: 3000, min: 1024 },
      breakpoint: { max: 500, min: 700 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    dd
    
    </>
  );
}
