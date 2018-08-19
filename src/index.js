import React from 'react';
import ReactDOM from 'react-dom';
import Touchpad from './components/Touchpad.js';

var destination = document.querySelector("#root");

ReactDOM.render(
  <div>

    <Touchpad />
  </div>,
  destination
);
