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
          aria-labelledby="Abrir youtube"
          onClick={() =>
            window.open("https://www.youtube.com/@marioguitarman8337/")
          }
        >
          <FaYoutube />
        </ButtonIcon>
        <ButtonIcon
          aria-labelledby="Abrir instagram"
          onClick={() =>
            window.open("https://www.instagram.com/marioguitarman/")
          }
        >
          <FaInstagram />
        </ButtonIcon>
        <ButtonIcon
          aria-labelledby="Enviar e-mail"
          onClick={() => window.open(`mailto:${email}`)}
        >
          <AiOutlineMail />
        </ButtonIcon>
      </MenuSocial>
    </Container>
  );
});

export default Home;
