import Carousel from "nuka-carousel";
import { Image } from "./styles";
import { images } from "./images";

export function CarouselComponent() {
  return (
    <div
      style={{
        margin: "6rem 5rem",
      }}
    >
      <Carousel
        style={{
          marginTop: 60,
          alignSelf: "center",
          justifySelf: "center",
          width: "100%",
          cursor: "grab",
        }}
        autoplay
      >
        {images.map((img, index) => (
          <Image key={index} src={img.image} alt={img.alt} />
        ))}
      </Carousel>
    </div>
  );
}
