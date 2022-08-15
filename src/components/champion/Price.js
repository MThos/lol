import React from 'react';

const Price = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-price">
      <div id="champion-price-be">
        {static_data['price']['blueEssence']}
      </div>
      <img id="champion-price-be-img" src='../images/compressed/BE_icon.webp' alt="Blue Essence" />
      <div id="champion-price-rp">
        {static_data['price']['rp']}
      </div>
      <img id="champion-price-rp-img" src='../images/compressed/RP_icon.webp' alt="Riot Points" />
    </div>
  )
}

export default Price;