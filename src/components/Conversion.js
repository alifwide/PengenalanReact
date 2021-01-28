import React from 'react';

class Conversion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ouput: 0
    }
  }
  DecimalToBinary = (input) => {
    var bin =
      this.setState({ output: Number(input).toString(2) })
  }

  BinaryToDecimal = (input) => {
    this.setState({ output: parseInt((input + '').replace(/[^01]/gi, ''), 2) })
  }

  HexToBinary = (input) => {
    this.setState({ output: ("00000000" + (parseInt(input, 16)).toString(2)).substr(-8) })
  }

  BinaryToHex = (input) => {
    this.setState({ output: parseInt(input, 2).toString(16).toUpperCase() })
  }

  HexToDecimal = (input) => {
    this.setState({ output: parseInt(input, 16) })

  }

  DecimalToHex = (input) => {
    this.setState({ output: Number(input).toString(16) })
  }




  calculate = () => {

    const selected = document.getElementById("sel1").value;
    var input = document.getElementById("in").value;
    input = String(input);
    if (selected == 1) {
      this.BinaryToDecimal(input);
    } else if (selected == 2) {
      this.DecimalToBinary(input);
    } else if (selected == 3) {
      this.BinaryToHex(input);
    } else if (selected == 4) {
      this.HexToBinary(input);
    } else if (selected == 5) {
      this.DecimalToHex(input);
    } else if (selected == 6) {
      this.HexToDecimal(input);
    }

  }

  render() {
    return (

      <div className="form">

        <h2 className="title">
          Number conversion
				</h2>
        <div class="form-group">
          <label for="sel1">Select Conversion:</label>
          <select class="form-control" id="sel1">
            <option value="1">Binary To Decimal</option>
            <option value="2">Decimal To Binary</option>
            <option value="3">Binary To Hex</option>
            <option value="4">Hex to Binary</option>
            <option value="5">Decimal To hex</option>
            <option value="6">Hex to decimal</option>
          </select>
        </div>



        <div className="form-group">
          <label for="height">input</label>
          <input type="text" className="form-control" id="in" />
        </div>

        <br />
        <div className="form-group">
          <label for="weight">Output</label>
          <h3 id="out">{this.state.output}</h3>
        </div>

        <br />
        <button className="btn btn-primary" onClick={this.calculate}>Convert</button>
      </div>
    )
  }
}

export default Conversion;