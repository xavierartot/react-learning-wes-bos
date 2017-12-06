// let's go!
import React from 'react'; // 'react' is looking in the node_modules/
import {render} from 'react-dom';//here we're importing only one method {render}
import {BrowserRouter, Match, Miss} from 'react-router'

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';//add a relatif path to make it work
import NotFound from './components/NotFound';
//import ReactDom from 'react-dom';//entire package

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={StorePicker} />
        <Match pattern='/store/:storeId' component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}
//ReactDom.render()//entire package
render(<Root/>, document.querySelector('#main'))
