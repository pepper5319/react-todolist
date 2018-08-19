import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

const math = require('mathjs');
const he = require('he');

class Touchpad extends Component {

  constructor(props){
    super(props);

    this.state = {
      equation: "0",
      sum: 0,
    }
    this.addToEquation = this.addToEquation.bind(this);
    this.computeEquation = this.computeEquation.bind(this);
    this.clearEquation = this.clearEquation.bind(this);
  }

  clearEquation(){
    this.setState((prevState) => {
        return {
          equation: "0",
          sum: 0,
        };
      });
  }
  addToEquation(value){
    if(this.state.equation === "0"){
      this.setState({equation: ""});
    }
    this.setState((prevState) => {
        return {
          equation: prevState.equation += value
        };
      });
  }
  computeEquation(){
    var eq = this.state.equation.replace('x', '*');
    let result = math.eval(eq);
    this.setState({
      sum: result,
      equation: '0',
    });
  }

  render(){
    var equalStyle = {
      "margin-left": "300px",
    }
    return(
      <div>
        <h4>{this.state.equation}</h4>
        <p>{this.state.sum}</p>
        <div class='row'>
          <Button value="7" onClick={() => this.addToEquation(7)}/>
          <Button value="8" onClick={() => this.addToEquation(8)} />
          <Button value="9" onClick={() => this.addToEquation(9)} />
          <Button value="+" onClick={() => this.addToEquation('+')} />
        </div>
        <div class='row'>
          <Button value="4" onClick={() => this.addToEquation(4)} />
          <Button value="5" onClick={() => this.addToEquation(5)} />
          <Button value="6" onClick={() => this.addToEquation(6)} />
          <Button value="-" onClick={() => this.addToEquation('-')} />
        </div>
        <div class='row'>
          <Button value="1" onClick={() => this.addToEquation(1)} />
          <Button value="2" onClick={() => this.addToEquation(2)} />
          <Button value="3" onClick={() => this.addToEquation(3)} />
          <Button value="x" onClick={() => this.addToEquation('x')} />
        </div>
        <div class='row'>
          <Button value="0" onClick={() => this.addToEquation(0)} />
          <Button value="=" style={equalStyle} onClick={this.computeEquation} />
          <Button value="CLEAR" style={equalStyle} onClick={this.clearEquation} />
        </div>
      </div>
    );
  }
}
export default Touchpad;
