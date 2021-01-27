import React from 'react'

export default function(props) {

    const status = props.nota >= 6 ? 'Aprovado' : 'De Exame'

    return(
        <div>
            <h2>{ props.title }</h2>
            <h3>{ props.subtitle}</h3>
            <p>O aluno está {status}</p>
        </div>
    )
}