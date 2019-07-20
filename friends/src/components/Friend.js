import React from 'react'

function Friend(props) {
    return (
        <div className={`friend ${props.name}`}>
            <p><strong>Name: </strong> {props.name}</p>
            <p><strong>Email: </strong> {props.email}</p>
            <p><strong>Age: </strong> {props.age}</p>
            <button id={props.id} onClick={props.onDelete}>Delete</button>
            <button id={props.id} onClick={props.onUpdate}>Update</button>
        </div>
    )
}

export default Friend