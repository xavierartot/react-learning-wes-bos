// let's go!
import React from 'react'; // 'react' is looking in the node_modules/
import {render} from 'react-dom';//here we're importing only one method {render}
import StorePicker from './components/StorePicker';//add a relatif path to make it work
import './css/style.css';
//import ReactDom from 'react-dom';//entire package

//ReactDom.render()//entire package
render(<StorePicker/>, document.querySelector('#main'))
