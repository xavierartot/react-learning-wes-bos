import React from 'react';
import AddFishForms from './AddFishForms';

class Test extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForms addFish={this.props.addFish}/>
      </div>
    );
  }
}

export default Inventory;
