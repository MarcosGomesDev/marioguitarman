import React, { forwardRef } from 'react'
import { Card, Container, Content, Header, HeaderTitle, Text, Title } from './styles'

const Service = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Container ref={ref}>
            <Header>
                <HeaderTitle>Metodologias de trabalho</HeaderTitle>
                <Text style={{textAlign: 'center'}}>Conheça um pouco de como eu trabalho no dia a dia</Text>
            </Header>
            <Content>
                <Card>
                    <Title>Desenvolvimento Web</Title>
                    <Text>
                    Concentrado no desenvolvimento de sites, páginas únicas, e-commerce e outras aplicações, 
                    com o objetivo de oferecer uma experiência de alta qualidade e otimização do site excepcional."
                    </Text>
                </Card>
                <Card>
                    <Title>Desenvolvimento Mobile</Title>
                    <Text>
                        Especializado no desenvolvimento mobile utilizando a tecnologia React Native, criando aplicações 
                        nativas de alta performance, otimizadas para dispositivos móveis, e promovendo uma experiência única para o usuário.
                    </Text>
                </Card>
                <Card>
                    <Title>Design Responsivo</Title>
                    <Text>
                        Meu desenvolvimento é altamente focado em design responsivo, garantindo uma navegação agradável e eficaz em todos os dispositivos.
                    </Text>
                </Card>
                <Card>
                    <Title>Experiência do usuário</Title>
                    <Text>
                        Priorizo a experiência do usuário em nosso desenvolvimento, criando soluções intuitivas e agradáveis.
                    </Text>
                </Card>
            </Content>
        </Container>
    )
})

export default Service