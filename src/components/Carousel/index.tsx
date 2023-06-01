import Carousel from "nuka-carousel";
import {
  ContainerMobile,
  ContainerArrow,
  ContainerDesk,
  Image,
} from "./styles";
import { imagesDesk } from "./images";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  left?: boolean;
};

function Arrow({ left, onClick }: ArrowProps) {
  return (
    <ContainerArrow onClick={onClick} style={{ cursor: "pointer" }}>
      {left ? (
        <MdOutlineKeyboardArrowLeft
          size={42}
          color="#fff"
          style={{
            backgroundColor: "#ff0000",
            borderRadius: 20,
            marginLeft: 14,
          }}
        />
      ) : (
        <MdOutlineKeyboardArrowRight
          size={42}
          color="#fff"
          style={{
            backgroundColor: "#ff0000",
            borderRadius: 20,
            marginRight: 14,
          }}
        />
      )}
    </ContainerArrow>
  );
}

export function CarouselComponent() {
  return (
    <>
      <ContainerDesk>
        <Carousel
          style={{
            cursor: "grab",
          }}
          renderCenterLeftControls={({ previousSlide }) => (
            <Arrow left onClick={() => previousSlide()} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Arrow onClick={() => nextSlide()} />
          )}
          renderBottomCenterControls={({ currentSlide }) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {imagesDesk.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    marginBottom: "6%",
                    borderRadius: "50%",
                    margin: "0 5px",
                    backgroundColor:
                      currentSlide === index ? "#ff0000" : "transparent",
                    border: `2px solid ${
                      currentSlide === index ? "transparent" : "#fff"
                    }`,
                  }}
                ></div>
              ))}
            </div>
          )}
        >
          {imagesDesk.map((img, index) => (
            <Image key={index} src={img.image} alt={img.alt} />
          ))}
        </Carousel>
      </ContainerDesk>

      <ContainerMobile></ContainerMobile>
    </>
  );
}
