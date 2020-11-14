import React from 'react'

function CalcDisplay(props){
    return(
        <input
            value={props.text}
            readOnly={true}
            className="calc-display-style"/>
    );
}

export default CalcDisplay;