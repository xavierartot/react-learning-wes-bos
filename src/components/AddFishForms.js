import React from 'react';
class AddFishForms extends React.Component {

  createFish(event) {
    event.preventDefault();
    console.log('1 🐟');
    const fish = {
      name    : this.name.value, 
      price   : this.price.value, 
      status  : this.status.value, 
      desc    : this.desc.value, 
      image   : this.image.value, 
    };

    console.log(fish);
    //add the props addFish
    this.props.addFish(fish);//the props is add in Inventory too
    //reset the form
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={ (input) => this.fishForm = input} className='fish-edit' onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input} type='text' placeholder='Fish name'   />
        <input ref={(input) => this.price = input} type='text' placeholder='Fish price'  />
        <select ref={(input) => this.status = input}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder='Fish Desc'></textarea>
        <input ref={(input) => this.image = input} type='text' placeholder='Fish image' />
        <button type='submit'>+ Add Item</button>
      </form>
    );
  }
}
export default AddFishForms;
