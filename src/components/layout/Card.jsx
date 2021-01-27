import './Card.css'
import React from 'react'

export default (props) => {

    const style = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="card" style={style}>
            <h2 className="title">{props.title}</h2>
            <div className="content">{props.children}</div>
        </div>
    )

}