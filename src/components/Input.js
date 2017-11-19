import React from 'react';

const Input = props => {
    return (
        <div>
            <input type={props.type || "text"} id={props.id} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;
