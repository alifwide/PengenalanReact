import React from 'react';

class Cicilan extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			output:"Masukkan data yang diperlukan"
		}
	}

	calculate = () => {
		const periode = document.getElementById("periode").value;
		const nominal = document.getElementById("nominal").value;
		const bunga = document.getElementById("bunga").value;
		let output;
		if(nominal == "" || periode == "" || bunga == ""){
			output = ""
		}else{
			(output) = (Number(nominal) + Number(nominal) * Number(bunga) / 100) / Number(periode);
		}
		this.setState({output : output})
	}


	render() {
		return (
			<div className="form">

				<h2 className="title">
					Penghitung Cicilan
				</h2>
				<div className="form-group">
					<label for="nominal"> Nominal</label>
					<input type="number" onChange={this.calculate} className="form-control" id="nominal" />
				</div>

				<br/>
				<div className="form-group">
					<label for="bunga">% Bunga</label>
					<input type="number" onChange={this.calculate} className="form-control" id="bunga" />
				</div>

				<br/>
				<div className="form-group">
					<label for="periode">Periode (Bulan)</label>
					<input type="number" onChange={this.calculate} className="form-control" id="periode" />
				</div>

				<br/>
		<h3>Cicilan : {this.state.output}</h3>
				
			</div>
		)
	}
}

export default Cicilan;