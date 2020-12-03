
import React from 'react'



const genSlideStyle = (value) => {
    return {
        point: {
            down: `calc(${value * 20}% - ${5 + 3 * value}px)`,
        },


        range: {
            width: `${value * 20}%`,
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
        this.setState({ value: e.target.value });
    }

    render () {
        const slideStyle = genSlideStyle(this.state.value);

        return (
            <div className="range" >
                <span className="bullet" />
                <span className="bullet-1" />
                <span className="bullet-2" />
                <span className="bullet-3" />

                <span className="range-value" style={slideStyle.range} />
                <span className="circle" style={slideStyle.point} />
                <input
                    className="range-slide"
                    name="range"
                    type="range"
                    min="0"
                    max="10"
                    value={this.state.value}
                    step="1"
                    onChange={this.handleChange}
                />

            </div>
        );
    }
}


export default RangeSlider;