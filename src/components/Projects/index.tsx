import { forwardRef } from "react";
import {
  Button,
  ButtonOutline,
  Card,
  CardContent,
  Container,
  ContainerButton,
  Content,
  Description,
  Image,
  Title,
} from "./styles";

import Image1 from "../../assets/hqdefault.webp";
import Image2 from "../../assets/mqdefault_6s.webp";
import Image3 from "../../assets/mqdefault_3.webp";

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <Title>Conheça um pouco do meu trabalho</Title>
      <Content>
        <Card>
          <Image src={Image1} />
          <Description>
            <CardContent>
              <Button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=uaNpDL7Nisg")
                }
                bg="#ff0000"
              >
                Abrir no Youtube
              </Button>
            </CardContent>
          </Description>
        </Card>
        <Card>
          <Image src={Image2} />
          <Description>
            <CardContent>
              <Button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=7wW7-LG4T7U")
                }
                bg="#ff0000"
              >
                Abrir no Youtube
              </Button>
            </CardContent>
          </Description>
        </Card>
        <Card>
          <Image src={Image3} />
          <Description>
            <CardContent>
              <Button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=v1ATeZLjwVY")
                }
                bg="#ff0000"
              >
                Abrir no Youtube
              </Button>
            </CardContent>
          </Description>
        </Card>
      </Content>
      <ContainerButton>
        <ButtonOutline
          onClick={() => window.open("https://github.com/MarcosGomesDev")}
        >
          Abrir Youtube
        </ButtonOutline>
      </ContainerButton>
    </Container>
  );
});

export default Projects;
