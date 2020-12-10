import React from 'react'
import '../App.css';
import Calc from '../Calc';
import CalcApi from "../CalcApi";
import * as Controller from "../Controller/AppController";
import  AppModel  from "../Model/AppModel";

import CalcDisplay from "../CalcDisplay";




class App extends React.Component {

    constructor(props) {
        super(props);
    }


/////////////////////////////// VIEW ////////////////////////////////////////////////////
 render(){


     return (
         <div className="App">
             <div className="bar">
                 <input id="fileInput" type="file" style={{display: "none"}} onChange={this.props.controller.Zmena}/>
                 <input type="button" value="Nahraj súbor" onClick={this.props.controller.Nahraj}/>
                 <input type="button" value="Uloz súbor" onClick={this.props.controller.Uloz}/>

             </div>
             <div className="Name">
                 <text className="definition-text"> Názov:</text>
                 <input type="text" style={{fontSize: 30}}/>
             </div>
             <div className="declaration">
                 <text className="definition-text"> Popis:</text>
                 <textarea/>
             </div>
             <div id="calc">
                 <Calc  Controller={this.props.controller} state={null} calcApi={new CalcApi('http://127.0.0.1:8000')}/>
             </div>


         </div>
     );
 }
}

export default App;
