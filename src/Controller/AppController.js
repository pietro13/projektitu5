

import ReactDOM from 'react-dom';
import React from "react";
import App from "../View/App";
import AppModel from "../Model/AppModel";
import CalcApi from "../CalcApi";
import Calc from "../Calc";


export default class AppController{



    constructor()
    {
        this.Model = new AppModel();

    }

    static Nahraj () {
        //document.getElementById('fileInput').click();
    }

    Zmena () {


        var subor = document.getElementById('fileInput').files[0];
        console.log(subor);
        if(subor.type === "text/plain")
        {

            alert("Uspesne nacitane");

        }
        else
        {
            alert("Neuspesne nacitane");
        }

    };

    Uloz() {
        //var fs = require('fs');
        // Get the data from each element on the form.


        // This variable stores all the data.
        let data =
            '\r Name: ' +  ' \r\n ' +
            'Age: '  + ' \r\n ' +
            'Email: '  + ' \r\n ' +
            'Country: '  + ' \r\n ' +
            'Message: ';

        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'MatrixCalc_data.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }

    Pridaj_operaciu(oper)
    {
        console.log(this.Model.state)
       if (this.Model.operacia_lenght()  === this.Model.matrix_lenght())
        {

            this.Model.Pridaj_operaciu(oper);


        }
        localStorage.setItem("all", "kata");
        this.render_calc();
    }

    render_calc()
    {
        ReactDOM.render(
            <React.StrictMode>
                <Calc  Controller={this} state = {this.Model.state.all} calcApi={new CalcApi('http://127.0.0.1:8000')}/>
            </React.StrictMode>,
            document.getElementById('calc')
        );

    }




}




