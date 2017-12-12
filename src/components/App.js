import React from 'react';
import Header from './Header';
import Inventory from './Inventory'; //contient <AddFishForms/> 
import Order from './Order';
import Fishes from '../sample-fishes';//data
import Fish from './Fish';

class App extends React.Component {

  constructor() {
    super();
    this.addFish = this.addFish.bind(this);//bind the mehod addFish
    this.loadSamples = this.loadSamples.bind(this);//bind the mehod addFish
    this.addToOrder = this.addToOrder.bind(this);//bind the mehod addFish
    //getinitial state by create the big object state
    this.state = {
      fishes: {},
      order: {} 
    } 
  }
  
  addFish(fish) {
    //udapte our state
    //In React you can't do the update like that: 
    //  this.state.fishes.fish1 = fish; for performance reason we don't update the object 
    //  and avoid accidentley update the wrong data
    console.log(...this.state.fishes);
    const fishes = {...this.state.fishes}; //... are a spread, we copy the fishes state in new fishes object
    //add a timestamp in our new fish
    const timestamp  = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    //set state
    this.setState({
      //it's the same to replace:fishes: fishes by fishes
      fishes: fishes 
    });
  }

  loadSamples() {
    this.setState({
      fishes: Fishes
    });
  }

  addToOrder(key) {
    // take a copy of our state
    console.log(...this.state.order);
    const order = {...this.state.order};//the object is define in the constructor and is empty
    // udate or add the new number of fish oredered
    order[key] = order[key] + 1 || 1;//order[key] is empty incremente 1 or add 1
    this.setState({
      order: order 
    });
  }
  render() {
    return (
      <div className='catch-of-the-day'>
        <div className="menu">
          <Header tagline='fresh seefood market' cool={true} age='5000'/>
          <ul className="list-of-fishes" >
            {
              // display fishes from ../sample-fishes
              Object
                .keys(this.state.fishes)  /* transform the object in array */
                //add the component Fish and details property
                .map( (cle, i) => <Fish 
                  key={cle} //for react never manipulate
                  index={cle}// this props
                  addToOrder={this.addToOrder} 
                  details={this.state.fishes[cle]} /> )
            }
          </ul>
        </div>

        {/* pass the function addFish and "state" in Invetory */}
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/> 
        <Order />

      </div>
    )
  }
}

export default App;

