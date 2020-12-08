
import React from 'react'



const genSlideStyle = (value) => {
    return {
        point: {
            left: `calc(${value * 20}% - ${5 + 3 * value}px)`,
        },


        range: {
            height: `${value * 20}%`,
        },
    };
};

class RangeSlider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 1,
        }
    }




    handleChange = (e) => {

        if(this.props.type === 1)
        {
            if( this.props.matrix.length - 1 < e.target.value )
            {
                this.props.matrix.push(['']);
                console.log((this.props.matrix.length - 1));
              //  var columns = this.state.columns;
              //  var newColumn = new Array(this.getHeight());
             //   for (var i = 0; i < newColumn.length; i++) {
             //       newColumn[i] = ''
            //    };
             //   columns.push(newColumn);
            }
            if(this.props.matrix.length - 1 > e.target.value)
            {
                //console.log(this.props.matrix.length);
                //console.log(e.target.value/10+1);
               this.props.matrix.pop();
            }
        }
        else{
            if( this.props.matrix[0].length - 1 < e.target.value )
            {
                for(var i =0; i<this.props.matrix.length ;i++)
                    this.props.matrix[i].push(['']);
                console.log((this.props.matrix.length - 1));
                //  var columns = this.state.columns;
                //  var newColumn = new Array(this.getHeight());
                //   for (var i = 0; i < newColumn.length; i++) {
                //       newColumn[i] = ''
                //    };
                //   columns.push(newColumn);
            }
            if(this.props.matrix[0].length - 1 > e.target.value)
            {
                //console.log(this.props.matrix.length);
                //console.log(e.target.value/10+1);
                for(var i =0; i<this.props.matrix.length ;i++)
                this.props.matrix[i].pop();
            }
        }
            //value = this.props.matrix[0].length;
    }

    render () {
        const slideStyle = genSlideStyle(this.state.value);
        var value;
        var styl;
        if(this.props.type === 1)
        {
              value = this.props.matrix.length-1;
              styl = {};
        }
        else {
            value = this.props.matrix[0].length - 1;
            styl = {transform: "rotate(90deg)"};
        }
        return (
            <div  >

                <input
                    className="range-slide"
                    name="range"
                    type="range"
                    min="0"
                    max="9"
                    value={value}
                    step="1"
                    onChange={this.handleChange}
                    style={styl}

                />

            </div>
        );
    }
}


export default RangeSlider;