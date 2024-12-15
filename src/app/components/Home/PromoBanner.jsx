import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {SliderData}  from "../../../models/PromoBanner";

const PromoBanner = () => {
  const options = {
    delay: 3000,
  };
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(options)]);
  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {SliderData.map((item) => {
            return (
              <div
                className="flex items-center justify-center embla__slide"
                key={item.id}
              >
                <img
                  className="object-cover  rounded-[20px] px-2 pt-1 w-full hidden sm:block md:block lg:block"
                  src={item.imageURL}
                  alt={item.description}
                />
                                <img
                  className="object-cover  rounded-[20px] px-2 pt-1 w-full sm:hidden md:hidden lg:hidden"
                  src={item.imageURLP}
                  alt={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PromoBanner;
