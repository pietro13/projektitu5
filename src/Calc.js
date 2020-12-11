import React from 'react'
import CalcPanel from "./CalcPanel";
import RangeSlider from "./Slider";
import Matrix from "./react-matrix";
import Controller from "./Controller"
import {render} from "@testing-library/react";
import board from "./keyboard";

class Calc extends React.Component{

    constructor(props){
        super(props);
        if(props.state)
        {
            this.state = {
                /* matica riadok stlpec array matic array operacii*/
                all: props.state,
                update: 0,
            };
        }
        else {
            this.state = {
                /* matica riadok stlpec array matic array operacii*/
                all: [-1, -1, -1, [], []],
                update: 0,
            };
        }
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

    //vlozenie novej matice prazdnej
    matrixInputHandler() {

        if (this.state.all[3].length === this.state.all[4].length)
        {

            this.state.all[3].push([['']]);
        this.setState({
                update: 0,
             });
        }
    }

    //funkcia zmeni cislo aktivnej matice
    set_matrix_active(i)
    {
       this.state.all[0] = i;
       this.setState({
           update: 0
       })

    }

    my_render()
    {
        this.setState({
            update: 0
        })
    }

    //inspiracia z: https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
    copytoClipboard()
    {
        var newmatrix = "";
        var oldmatrix = this.state.all[3][this.state.all[0]];
        for( var i = 0; i< oldmatrix[0].length; i++)
        {
            for(var j = 0; j<oldmatrix.length; j++)
            {
                if(oldmatrix[j][i])
                newmatrix += oldmatrix[j][i] + ',';
                else
                    newmatrix += '0,';
            }
            newmatrix = newmatrix.slice(0,-1) + '\n';

        }
        newmatrix = newmatrix.slice(0,-1);
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);

        dummy.value = newmatrix;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

    }

    droptoMatrix(e)
    {
        e.preventDefault();
        var textData = e.dataTransfer.getData('text');
        var array = [];
        var line = textData.split('\n');
        for( var i = 0; i < line.length; i++)
        {
            var column_array = [];
            var column = line[i].split(",");
            for(var j = 0 ; j < column.length;j++)
            {
                column_array.push([column[j]]);
            }
            array.push(column_array);
        }
        console.log(array);
        var main = this.state.all[3];
        if(main[this.state.all[0] + 1]) {
            this.state.all[3] = main.slice(0, this.state.all[0]).concat(array).concat(main[this.state.all[0] + 1]);
        }
        else
        {
            this.state.all[3] =main.slice(0, this.state.all[0]).concat(array);
        }
        this.my_render();


    }





    render(){
        var { all } = this.state;
        var  j  = 0;



        localStorage.setItem("dana","no");
        return(
            <span  >
                <div className="matrix-display" onChange={() => this.setState({update:0})} >

                    {all[3].map((row, i) => (

                        <span key={i} onClick={()=>this.set_matrix_active(i) } >
                            <span className="padding_left align_start">
                                {(all[0] === i) && <input key={i+ "p1"} style={{ width: "60px" , height: "30px" , border: '1px solid #eee', 'text-align' : 'center' }} readOnly={false}

                                                  onDrop={(e) =>this.droptoMatrix(e)}         value={"DROP"} /> }
                                {(all[0] === i) && <button onClick={() => this.copytoClipboard()} > copy </button>}
                                {(all[0] === i) && <button onClick={() => this.transponMatrix()} > transpon </button>}
                                {(all[0] === i) && <RangeSlider key={i + "p2"} type = {1} matrix={all[3][i]} />}
                            </span>
                            <span className="padding_top align_center">
                                <span  className="align_start">
                                    {(all[0] === i) && <RangeSlider key={i+ "p3"} type = {2} matrix={all[3][i]} />}
                                </span>

                                <span  className="matrix-output" >
                                     <Matrix columns={all[3][i]} all={all} state ={()=>this.my_render()}index={j++} key={i+ "p4"} matrix_oper={0}/>



                                <span style={{padding: '20px'}}>
                                    {all[4][i] &&
                                    <input key={i + "p5"} value={all[4][i]}  onClick={(e) => e.stopPropagation()} style={{width: 20,border: '1px solid #eee',

                                        margin: '4px 0',
                                    'font-size': '25px',
                                        padding: '4px',
                                        textAlign: 'center',
                                    }}/>
                                    }
                                </span></span>
                            </span>
                        </span>
                    ))}
                </div>


                <div className="Calc-buttons"  >


                    <CalcPanel className="calc-grid"
                    result={this.state.result}
                    numberClicked={this.numberHandler.bind(this)}
                    operationClicked={(e) => this.props.Controller.Pridaj_operaciu(e)}
                    equalClicked={this.equalHandler.bind(this)}
                    matrixInput={this.matrixInputHandler.bind(this)}
                    />
                </div>


    </span>
        )
    }
}

export default Calc;