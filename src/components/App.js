import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

const dfdf = () => {
}
class App extends React.Component {
  render() {
    dfdf();
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

