import React from 'react';
import {getFunName } from '../helpers';
import XavTest from './XavTest';
class StorePicker extends React.Component {
  //constructor() {
    //super();
    ////bind the function goToStore to availble it in the render()
    //this.goToStore = this.goToStore.bind(this);
  //}

  goToStore(e) {
    e.preventDefault();
    console.log('You changed the URL');
    // first grab the text from the box
    console.log(this); 
    console.log(this.storeInput ); 
    let storeInput = this.storeInput;
    console.log(storeInput.value);
    // second we're going to transition from / to /store/:storeId
    //this by itself is null, we have to bind explicitly this 
  }
  render() {
    let title = 'Please Enter A Store';

    return (
      <div className='wrapper'>
        <XavTest/> 
        {/*  onSubmit={this.goToStore.bind(this)}> */}
        <form className='store-selector' onSubmit={ (e) => this.goToStore(e)}>
          <h2>{title}</h2>
          <input type='text' 
            required placeholder='Store Name' defaultValue={getFunName()}
          ref={(input) => {this.storeInput = input}} />
          <button type='submit'>pick your store</button>
        </form>
      </div>
      )
  }
}
export default StorePicker;
