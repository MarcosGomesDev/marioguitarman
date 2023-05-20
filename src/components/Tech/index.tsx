import React, { forwardRef } from 'react'
import { Container, Content, Title } from './styles'
import { techs } from './data'
import CardItem from './Card'

const Tech = forwardRef<HTMLElement>((props, ref) => {

    return (
        <Container ref={ref}>
            <Title>Conhecimento</Title>
            <Content>
                {techs.map((item: any, i: any) => (
                    <CardItem
                        title={item.title}
                        icon={<item.icon style={{color: '#2ef8a0'}} />}
                        key={i}
                    />
                ))}
            </Content>
        </Container>
    )
})

export default Tech