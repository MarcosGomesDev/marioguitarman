import React, { forwardRef, useState } from 'react'
import { Button, ButtonContainer, Container, Header, Text, Title } from './styles'
import { FaAward, FaBriefcase } from 'react-icons/fa'
import QualificList from '../../components/QualificList'

const Qualifications = forwardRef<HTMLElement>((props, ref) => {
    const [showCourses, setShowCourses] = useState(true)

    const changeContent = () => {
        setShowCourses(!showCourses)
    }

    return (
        <Container ref={ref}>
            <Header>
                <Title>Minhas qualificações e experiências</Title>
            </Header>
            <ButtonContainer>
                <Button
                    active={showCourses}
                    onClick={() => showCourses !== true && changeContent()}
                >
                    <FaAward /> 
                    <Text>Qualificações</Text>
                </Button>
                <Button
                    active={!showCourses}
                    onClick={() => showCourses !== false && changeContent()}
                >
                    <FaBriefcase /> 
                    <Text>Experiências</Text>
                </Button>
            </ButtonContainer>

            {showCourses ? (
                <QualificList />
            ) : (
                <></>
            )}
            
        </Container>
    )
})

export default Qualifications