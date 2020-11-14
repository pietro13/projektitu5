import React from 'react'

function CalcDisplay(props){
    return(
        <input
            value={props.text}
            readOnly={true}/>
    );
}

export default CalcDisplay;