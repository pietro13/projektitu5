import React from 'react';
import Calc from "./CalcButton";
import

function CalcPanel (props)
{
    const captions =[
        "7","8","9","*",
        "4","5","6","+",
        "1","2","3","=",
        "Vloz maticu",
    ];
    const calc_buttons= captions.map((value,index)=>{
        return <Calc caption={value}/>
    });

    return(
        <div className="calc-grid">
            {calc_buttons}
        </div>
    )
}
export default CalcPanel;