import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this);
    return (
      <header className='top'>
        <h1>
          catch 
          <span className='ofThe'>
            <span className='of'>of</span>
            <span className='the'>the</span>
          </span> 
          day</h1>
        <h3 className='tagline'><span>{this.props.tagline}</span></h3>
      </header>
    );
  }
}

export default Header;
