// let's go!
import React from 'react'; // 'react' is looking in the node_modules/
import {render} from 'react-dom';//here we're importing only one method {render}
import './css/style.css';
import App from './components/App';
//import StorePicker from './components/StorePicker';//add a relatif path to make it work
//import ReactDom from 'react-dom';//entire package

//ReactDom.render()//entire package
render(<App/>, document.querySelector('#main'))
