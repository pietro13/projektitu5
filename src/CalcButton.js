import React from 'react';
import './App.css';

function CalcButton(props)
{
    return(
        <input type='button'
        value={props.caption}
        className={props.caption === "Vloz maticu" ? "calc-equal-button" : null}
        onClick={props.onClick}/>
    )
}

export default CalcButton;