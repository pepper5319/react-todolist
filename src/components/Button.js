import React, { Component } from 'react';

class Button extends Component{

  render(){
    var buttonStyle={
      "margin": "2.5px",
      "text-align": "center",
      "min-width": "60px",
    }
    return <button class="btn btn-primary" style={buttonStyle} onClick={this.props.onClick}>{this.props.value}</button>
  }
}

export default Button;
