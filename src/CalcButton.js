import React from 'react';
import './App.css';

function Calc(props)
{
    return(
        <input type='button'
        value={props.caption}
        className={props.caption === "Vloz maticu" ? "calc-equal-button" : null}/>
    )
}

export default Calc;