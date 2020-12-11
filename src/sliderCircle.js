import React from "react";
import { CircleSlider } from "react-circle-slider";
 
export default class SliderCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 24};
    }
 
    handleChange = value => {
        console.log(`Changed value ${value}`);
        this.props.temperatureValue(value);
        this.setState({ value });
    };
 
    render() {
        const { value } = this.state;
        return (
            <CircleSlider value={value} onChange={this.handleChange} 
            size={150}
            knobRadius={4}
            progressWidth={3}
            showTooltip={true}
            gradientColorFrom="#FEA346"
            gradientColorTo="#F8616D" />
        );
    }
}
 
