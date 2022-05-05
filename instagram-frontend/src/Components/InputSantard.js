import React from 'react'



export default function InputSantard(props) {
    return (
        <div className='input-fild'>
            <label htmlFor={props.title}>{props.title}</label>
            <input
                id={props.title}
                type={props.type}
                placeholder={props.placeholder}
                value={props.state}
                onChange={props.setState} />
        </div>
    )
}
