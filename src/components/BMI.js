import React from 'react';

class BMI extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			weight: 0,
			height: 0,
			BMIValue: "",
			conclusion: ""
		}
	}

	BMICalculator = () => {
		const height = document.getElementById("height").value
		const weight = document.getElementById("weight").value

		var BMIValue = weight / (height * height);
		var conclusion;

		if (BMIValue < 18.5) {
			conclusion = "Kurus"
		} else if (BMIValue >= 18.5 && BMIValue < 25) {
			conclusion = "Ideal"
		} else if (BMIValue >= 25) {
			conclusion = "Obesitas"
		}

		if (height == "" || weight == "") {
			BMIValue = ""
		}
		this.setState({ BMIValue:(+BMIValue).toFixed(2), conclusion: conclusion });
	}


	render() {
		return (
			<div className="form">

				<h2 className="title">
					Body Mass Index Calculator
				</h2>
				<div className="form-group">
					<label for="height"> Tinggi Badan (Meter) </label>
					<input type="number" onChange={this.BMICalculator} className="form-control" id="height" />
				</div>

				<br/>
				<div className="form-group">
					<label for="weight">Berat Badan (Kilogram)</label>
					<input type="number" onChange={this.BMICalculator} className="form-control" id="weight" />
				</div>

				<br/>
				<h3 className="viewBMI-outer">
					BMI : 
					<h3 className="viewBMI-inner">
						{this.state.BMIValue}
					</h3>
				</h3>
				<h3>{this.state.conclusion}</h3>
			</div>
		)
	}
}

export default BMI;