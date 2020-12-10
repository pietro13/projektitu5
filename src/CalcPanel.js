import React from 'react';
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";

function CalcPanel (props)
{
    const buttons =[
        {text: "7", handler: ()=> props.numberClicked("7")},
        {text: "8", handler: ()=> props.numberClicked("8")},
        {text: "9", handler: ()=> props.numberClicked("9")},
        {text: "*", handler: ()=> props.operationClicked("*")},
        {text: "4", handler: ()=> props.numberClicked("4")},
        {text: "5", handler: ()=> props.numberClicked("5")},
        {text: "6", handler: ()=> props.numberClicked("6")},
        {text: "+", handler: ()=> props.operationClicked("+")},
        {text: "1", handler: ()=> props.numberClicked("1")},
        {text: "2", handler: ()=> props.numberClicked("2")},
        {text: "3", handler: ()=> props.numberClicked("3")},
        {text: "=", handler: ()=> props.equalClicked("=")},
        {text: "Vlož maticu", handler: ()=> props.matrixInput()},
    ];
    const calc_buttons= buttons.map((value,index) => {
        return <CalcButton
            caption={value.text}
            onClick={value.handler}
        />
    });

    return(
        <div className="calc-grid">
            {calc_buttons}
        </div>

    )
}
export default CalcPanel;