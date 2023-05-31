import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { Button, ButtonIcon, Container, MenuSocial, SubTitle } from "./styles";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  onClick(): void;
}

const email = "contatosmarioguitarman@gmail.com";

const Home = React.forwardRef<HTMLElement, Props>(({ onClick }, ref) => {
  return (
    <Container ref={ref}>
      <SubTitle>Mário Guitarman</SubTitle>
      <Button onClick={onClick}>Saiba mais</Button>

      <MenuSocial>
        <ButtonIcon
          onClick={() =>
            window.open("https://www.instagram.com/marioguitarman/")
          }
        >
          <FaYoutube />
        </ButtonIcon>
        <ButtonIcon
          onClick={() =>
            window.open("https://www.youtube.com/@marioguitarman8337/")
          }
        >
          <FaInstagram />
        </ButtonIcon>
        <ButtonIcon onClick={() => window.open(`mailto:${email}`)}>
          <AiOutlineMail />
        </ButtonIcon>
      </MenuSocial>
    </Container>
  );
});

export default Home;
