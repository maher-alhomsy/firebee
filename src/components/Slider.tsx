import { useEffect, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";
import productOne from "@/assets/product-one.png";
import productTwo from "@/assets/product-two.png";
import productFour from "@/assets/product-four.png";
import productFive from "@/assets/product-five.png";
import productThree from "@/assets/product-three.png";

const images = [productOne, productTwo, productThree, productFour, productFive];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("slidesInView", ({ slidesInView }) => {
      const results = slidesInView();

      if (results.length === 1) {
        setCurrent(results[0]);
      }
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent onChangeCapture={() => console.log("MAHER")}>
          {images.map((image) => (
            <CarouselItem key={image}>
              <img
                alt=""
                src={image}
                className="size-[350px] mx-auto rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <ul className="flex gap-6 mt-6">
        {images.map((image, index) => (
          <li key={image}>
            <img className="size-32 rounded-md" src={image} alt="" />

            {index === current && (
              <div className="w-20 mx-auto mt-1 h-[2px] bg-gradient-to-r from-[#ff225e] to-[#9d2ac6]" />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Slider;
