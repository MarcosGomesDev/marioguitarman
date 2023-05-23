import Carousel from "nuka-carousel";
import { Container, Image } from "./styles";
import { images } from "./images";

export function CarouselComponent() {
  return (
    <Container>
      <Carousel
        style={{
          cursor: "grab",
        }}
        autoplay
      >
        {images.map((img, index) => (
          <Image key={index} src={img.image} alt={img.alt} />
        ))}
      </Carousel>
    </Container>
  );
}
