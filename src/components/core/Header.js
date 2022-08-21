import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="/champions" className="header-button">CHAMPIONS</a>
      <img id="header-img" src={process.env.PUBLIC_URL + "/images/compressed/logo-outside-L-circle.png"} alt="League Census" />
      <a href="/items" className="header-button">ITEMS</a>
    </header>
  )
}

export default Header;