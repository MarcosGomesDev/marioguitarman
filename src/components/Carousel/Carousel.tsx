import React, { useCallback } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import { usePrevNextButtons } from "./components/ArrowButtons";
import Autoplay from "embla-carousel-autoplay";

import "./styles.css";
import imageByIndex from "./imageByIndex";
import { ImagesArray } from "./images";

type PropType = {
  slides: ImagesArray[];
  options?: EmblaOptionsType;
};

export function Carousel({ slides, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction) {
      autoplay.stop();

      setTimeout(() => autoplay.reset(), 200);
    }
  }, []);

  usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <picture>
                <source
                  media="(min-width:600px)"
                  srcSet={imageByIndex(index).desk.image}
                />
              </picture>
              <img
                className="embla__slide__img rounded-2xl"
                src={imageByIndex(index).mobile.image}
                alt={imageByIndex(index).mobile.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
