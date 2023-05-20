import React from 'react'
import { IconBaseProps } from 'react-icons'

import { Card, Text } from '../styles'

export interface CardProps {
    title: string,
    icon: IconBaseProps
}

const CardItem: React.FC<CardProps> = (data) => {
    return (
        <Card>
            <>
                {data.icon}
            </>
            <Text>{data.title}</Text>
        </Card>
    )
}

export default CardItem