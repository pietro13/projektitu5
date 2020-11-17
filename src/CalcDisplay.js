import React from 'react'
import Matrix from './react-matrix'







class CalcDisplay extends React.Component{





    render()
    {


        return (
            <div>
                {this.props.all[3].map((row, i) => (
                    <span key={i}>


                        <Matrix columns={this.props.all[3][i]} all={this.props.all} key={i}/>
            </span>


                ))}
            </div>


        );
    }
}

export default CalcDisplay;