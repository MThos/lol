import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="/champions">Champions</a>
      <img src={process.env.PUBLIC_URL + "/images/compressed/logo-L.png"} alt="League Census" />
      <a href="/items">Items</a>
    </header>
  )
}

export default Header;