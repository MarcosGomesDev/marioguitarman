import React, { forwardRef } from "react";
import { Container, Content, Description, Header, Link, Title } from "./styles";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const email = "contatosmarioguitarman@gmail.com";

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <Header>
        <Title>Networking</Title>
        <Description>
          Você pode me enviar um email ou entrar em contato comigo através das
          minhas redes.
        </Description>
      </Header>
      <Content>
        <Link
          onClick={() =>
            window.open("https://www.youtube.com/@marioguitarman8337")
          }
        >
          <FaYoutube />
          Youtube
        </Link>
        <Link onClick={() => window.open(`mailto:${email}`)}>
          <AiOutlineMail />
          Gmail
        </Link>
        <Link
          onClick={() =>
            window.open("https://www.instagram.com/marioguitarman/")
          }
        >
          <FaInstagram />
          Instagram
        </Link>
      </Content>
    </Container>
  );
});

export default Contact;
