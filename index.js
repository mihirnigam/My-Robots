import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1  from './App1.js';
//import App from './App.js';
//import Hello from'./Hello.js';
//import CardList from './CardList';
//import Card from './Card.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 
//import {robots} from './robots';


/*ReactDOM.render(<Hello greeting={"hellow ninja"} />, 
  document.getElementById('root')
);*/
ReactDOM.render(<App1 />
	
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
    