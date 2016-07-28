/*import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/index/Index';

ReactDOM.render(
  <Index />,
  document.getElementById('example')
);*/

var sub = require('./components/sidebar'); 
var app = document.createElement('div'); 
app.innerHTML = '<h1>Hello World!</h1>'; 
app.appendChild(sub()); 
document.body.appendChild(app);

