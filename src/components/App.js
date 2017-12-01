import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  render() {
    return (
      <div className='catch-of-the-day'>
        <Header tagline='fresh seefood market' cool={true} age='5000'/>
        <Inventory />
        <Order />
      </div>
      )
  }
}
export default App;
