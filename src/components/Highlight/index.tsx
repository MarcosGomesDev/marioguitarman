import React from 'react'
import { Container, Content, Description, PlusText, TextContainer, TextNumber } from './styles'

const Highlight: React.FC = () => {
    return (
        <Container>
            <Content>
                <TextContainer>
                <PlusText>+</PlusText>
                <TextNumber>01</TextNumber>
                </TextContainer>
                <Description>Ano de experiência como desenvolvedor</Description>
            </Content>
            <Content>
                <TextContainer>
                <PlusText>+</PlusText>
                <TextNumber>09</TextNumber>
                </TextContainer>
                <Description>Projetos pessoais e educativos concluídos</Description>
            </Content>
            <Content>
                <TextContainer>
                <PlusText>+</PlusText>
                <TextNumber>01</TextNumber>
                </TextContainer>
                <Description>Projeto freelancer entregue</Description>
            </Content>
            <Content>
                <TextContainer>
                <PlusText>+</PlusText>
                <TextNumber>10</TextNumber>
                </TextContainer>
                <Description>Cursos concluídos</Description>
            </Content>
        </Container>
    )
}

export default Highlight