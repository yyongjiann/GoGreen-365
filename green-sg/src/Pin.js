import React from "react";
import './style.css';

export default function Pin(props) {

    return (
            <button 
                key={props.id}
                className='pin' 
                id={props.id} 
                onClick={e => props.handleClick(e)}
                name={props.id}
                />
    )
}