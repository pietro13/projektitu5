import React from 'react'



var mywidth = "50";



function CalcDisplay(props){console.log(props);






    return(
        <input
            style={{width: props.value.length*8}}
            value={props.value}
            type='text'
            className= "calc-display-style"
            onKeyDown={props.keyboard}/>

    );
}

export default CalcDisplay;