import React from 'react'
import Todo from './Todo'

export default function List(props) {
    let list = props.listItems.map((element, index) => {
        return <Todo key={index} task={element} />
    })

    return <div>{list}</div>
}