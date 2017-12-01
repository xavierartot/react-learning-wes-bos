import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this);
    return (
      <header className='top'>
        <h1>catch of the day</h1>
        <h3 className='tagline'>{this.props.tagline}</h3>

        h4[className=iii]

      </header>
    );
  }
}

export default Header;
