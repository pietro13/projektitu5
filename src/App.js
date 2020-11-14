import React from 'react'
import './App.css';
import Calc from './Calc';
import CalcApi from "./CalcApi";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Calc calcApi={new CalcApi('http://127.0.0.1:8000')}/>
        </header>
    </div>
  );
}

export default App;
