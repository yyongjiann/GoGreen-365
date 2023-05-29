import React from "react";
import './style.css'

export default function PopUp(props) {

    return (
    <div className="popupBox">
        <div className="popupCloseButton" onClick={props.handleClick}>&times;    </div>
        <p className="popupContent">I'm A Pop Up!!!</p>
    </div>
    );
}
