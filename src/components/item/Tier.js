import React from 'react';

const Tier = (props) => {
  const static_data = props.static_data;

  if (static_data['tier']) {
    return (
      <div id="item-tier">
        <div>Tier {static_data['tier']}</div>
      </div>
    )
  } else {
    return null;
  }
}

export default Tier;