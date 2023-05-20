import React from "react";
import {
  Container,
  ContainerAbout,
  HighlightText,
  Image,
  Text,
  Title,
} from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import Perfil from "../../assets/DSC_7086.jpg";

const About = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <Image src={Perfil} alt="Mario Guitarman" />
      <ContainerAbout>
        <HighlightText>
          <IoIosArrowForward
            color="#ff0000"
            style={{ marginLeft: -5, fontSize: 20 }}
          />
          <IoIosArrowForward
            color="#ff0000"
            style={{ marginLeft: -20, fontSize: 20 }}
          />
          GUITARRISTA PROFISSIONAL MÁRIO GUITARMAN
        </HighlightText>
        <Title>Mário Henrique Nunes Bezerra.</Title>
        <Text>
          Comecei minha vida musical desde cedo como baterista na igreja dos
          meus pais em Honório Gurgel, RJ. Com 11 anos, me interessei pela
          guitarra ao assistir a performance de um guitarrista incrível em uma
          igreja. Aos 17, comecei a tocar profissionalmente em diferentes
          lugares. Aos 26, fui contratado como guitarrista em uma igreja em
          Copacabana, RJ, e desde então as oportunidades cresceram. Tornei-me
          diretor musical na banda do cantor Gilson (Casinha Branca) por vários
          anos e fiz freelancers para diversos artistas através dele. Em 2011,
          comecei a tocar em uma igreja em Nova Iguaçu, onde tive a oportunidade
          de acompanhar vários cantores gospel.
        </Text>
      </ContainerAbout>
    </Container>
  );
});

export default About;
