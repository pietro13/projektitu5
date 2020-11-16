import React from 'react'
import CalcPanel from "./CalcPanel";
import CalcDisplay from "./CalcDisplay";
import Matrix from "./react-matrix";

class Calc extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            result: "",
            numbers:["", ""],
            numberIdx: 0,
            operation: "",
            board: [[0],[1]],
            matrix:[],
            mouse: "",
            x: -1,
            y: -1,


        };
    }
    operationHandler(operation){
        if(this.state.numberIdx === 1) {
            this.equalHandler();
            return;
        }

        if(operation === "add" &&
        this.state.numbers[this.state.numberIdx] === "")
        {
            this.numberHandler(operation === "add" ? "+" : null)
            return;
        }
        this.setOperation(operation);
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
            const newNumber = this.state.numbers[this.state.numberIdx] + number;
        this.setState(
            {
                mouse: number,
            }
        )
            this.updateNumber(newNumber);
    }

    updateNumber(newNumber){
        var newNumbers = this.state.numbers;
        newNumbers[this.state.numberIdx] = newNumber;
        this.setState({
            result: newNumbers[this.state.numberIdx],
            numbers: newNumbers,
        });
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

    matrixInputHandler()
    {

        this.state.matrix.push([1,1,[0]]);
        console.log(this.state);
    }


    render(){
        const { board } = this.state;
        const { mouse } = this.state;


        return(
            <div >
                <div className="matrix-output" >
                   <CalcDisplay  matrixtodisplay={board} mouse={mouse} value={this.state.result} keyboard={this.keyboardHandler.bind(this)}/>
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