import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//function definition
//console.log(app)

  //function invocation
// console.log(<chicken/>)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//imperative programming
  //let chickenObj = React.createElement("h1",{id: "chiken"}, "Bawk bawk")

// declarative programming
  //let goodbyeObj = <h1 id = "word"> GOOD BYE</h1>