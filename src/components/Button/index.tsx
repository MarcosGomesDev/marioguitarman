import React from 'react'
import { Container } from './styles'
import {FaArrowUp} from 'react-icons/fa'

interface Props {
    onClick(): void,
    active?: boolean
}

const Button: React.FC<Props> = ({onClick, active}) => {
    return (
        <Container active={active} onClick={onClick}>
            <FaArrowUp />
        </Container>
    )
}

export default Button