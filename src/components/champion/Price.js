import React from 'react';

const Price = (props) => {
  const static_data = props.static_data;
  const blue_essence = static_data['price']['blueEssence'];
  const riot_points = static_data['price']['rp'];

  return (
    <div id="champion-price">
      <div id="champion-price-be">
        {blue_essence}
      <img id="champion-price-be-img" src='../images/compressed/BE_icon.webp' alt="Blue Essence" />
      </div>
      <div id="champion-price-rp">
        {riot_points}
      <img id="champion-price-rp-img" src='../images/compressed/RP_icon.webp' alt="Riot Points" />
      </div>
    </div>
  )
}

export default Price;