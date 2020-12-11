
import ReactDOM from 'react-dom';
import React from "react";




export default class AppModel{

    state;

    constructor() {

            this.state = {
                /* matica riadok stlpec array matic array operacii*/
                all: [-1,-1,-1,[[["0"]]],[] ],
            };

    }

    Pridaj_operaciu(oper)
    {
        this.state.all[4].push(oper);
    }

    operacia_lenght()
    {
        return this.state.all[4].length;
    }

    matrix_lenght()
    {
        return this.state.all[3].length;
    }


};