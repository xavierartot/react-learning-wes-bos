import React from 'react';
import XavTest from './XavTest';
class StorePicker extends React.Component {
  render() {
    let title = 'Please Enter A Store';
    //sdfsdff
    return (
      <div className='wrapper'>
        <XavTest/> 
        {/* jsx */}
        {/* hello */}
        <form className='store-selector'>
          <h2>{title}</h2>
          <input type='text' required placeholder='Store Name' />
          <button type='submit'></button>
        </form>
      </div>
      )
  }
}
export default StorePicker;
