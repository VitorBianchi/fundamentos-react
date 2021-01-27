import React from 'react'

export default (props) => {

    const { min, max } = props
    const random = Math.floor(Math.random() * (props.max - props.min)) + props.min
 
    return (
        random
    )
}