import React from 'react'
import CalcPanel from "./CalcPanel";

import Matrix from "./react-matrix";
import {render} from "@testing-library/react";

class Calc extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            /* matica riadok stlpec array matic array operacii*/
            all: [-1,-1,-1,[[[0]]],[] ],
            update: 0,
        };
    }
    operationHandler(operation){
        if(this.state.all[4].length + 1  ===  this.state.all[3].length) {
            if(operation === "add"){

                this.state.all[4].push("+");
                this.setState({
                    update: 0,
                })
        }
        }



    }

    setOperation(operation) {
        this.setState({
            operation: operation
        });
        this.nextNumber();
    }

    nextNumber(){
        const newIdx = this.state.numberIdx === 0 ? 1 : 0;
        this.setState({
            result: this.state.numbers[newIdx],
            numberIdx: newIdx,
        });
    }

    numberHandler(number){
            var lenght = this.state.all[3][this.state.all[0]][this.state.all[1]][this.state.all[2]].length ;
            console.log(lenght);
            const newNumber =  number;
        this.setState(
            {
                update: 0,
            }
        )

    }





    equalHandler(){
        if( this.state.numbers[0] === "" || this.state.numbers[1] === ""){
            return;
        }

        this.props.calcApi.calculate(
            this.state.numbers[0],
            this.state.numbers[1],
            this.state.operation,
            (result)=>{
                this.setResult(result);
        });
    }

    keyboardHandler(props){console.log(props);
        if(props.key >= "0" && props.key <= "9")
        {
            console.log("A");
        };


    }

    setResult(result){
        const newNumbers = [result,""];
        const newNumberIdx = 0;
        this.setState({
            result: newNumbers[newNumberIdx],
            numbers: newNumberIdx,
            operation: "",
        });
    }

    matrixInputHandler() {

        if (this.state.all[3].length === this.state.all[4].length)
        {

            this.state.all[3].push([[0]]);
        this.setState({
                update: 0,
             });
        }
        console.log(this.state);
    }




    render(){
        const { all } = this.state;
        console.log(all);



        return(
            <div >
                <div className="matrix-output" >

                    {all[3].map((row, i) => (
                        <span key={i} className="matrix-output">
                            <Matrix columns={all[3][i]} all={all} key={i}/>
                            {all[4][i] &&


                            <input value={all[4][i]} style={{width: 8,border: '1px solid #eee',
                                display: 'block',
                                margin: '4px 0',
                                padding: '4px',
                                textAlign: 'center'}}/>
                        }
                        </span>


                    ))}
                </div>


                <div className="Calc-buttons">
                    <CalcPanel className="calc-grid"
                    result={this.state.result}
                    numberClicked={this.numberHandler.bind(this)}
                    operationClicked={this.operationHandler.bind(this)}
                    equalClicked={this.equalHandler.bind(this)}
                    matrixInput={this.matrixInputHandler.bind(this)}
                    />
                </div>


            </div>
        )
    }
}

export default Calc;