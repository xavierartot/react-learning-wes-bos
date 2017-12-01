import React from 'react';
//console.log(this);
const Header = (props) => {
  return (
    <header className='top'>
      <h1>
        catch 
        <span className='ofThe'>
          <span className='of'>of</span>
          <span className='the'>the</span>
        </span> 
        day</h1>
      <h3 className='tagline'><span>{props.tagline}</span></h3>
    </header>
  );
}

export default Header;
