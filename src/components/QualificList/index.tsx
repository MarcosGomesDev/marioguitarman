import React, { forwardRef } from 'react'
import QualificItem from './QualificItem'
import { Container, List, ListItem } from './styles'
import { courses } from './data'

const QualificList = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Container>
            <List>
                {courses.map((item, i) => (
                    <ListItem className={`li ${item.orientation ? 'right' : 'left'}`} key={i}>
                        <div >
                            <QualificItem data={item} />
                        </div>
                    </ListItem>

                ))}
            </List>
        </Container>
    )
})

export default QualificList