import React from 'react'
import Matrix from './react-matrix'



var mywidth = "50";



function CalcDisplay(props){console.log(props);






    return(
            <div>
            <Matrix columns={props.matrixtodisplay} mouse={props.mouse}/>
                <text > + </text>
            <Matrix columns={props.matrixtodisplay} mouse={props.mouse}/>
        </div>



    );
}

export default CalcDisplay;