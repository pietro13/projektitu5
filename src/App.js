import React from 'react'
import './App.css';
import Calc from './Calc';
import CalcApi from "./CalcApi";
import CalcDisplay from "./CalcDisplay";



function App() {
  return (
      <div className="App">


        <div className="Name">
            <text className="definition-text"  > Názov:    </text>
            <input type="text" style={{ fontSize: 30 }} />
        </div>
          <div className="declaration">
              <text className="definition-text"  > Popis:    </text>
              <textarea/>
          </div>
          <div >
          <Calc calcApi={new CalcApi('http://127.0.0.1:8000')}/>
      </div>



      </div>
  );
}

export default App;
