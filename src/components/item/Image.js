import React from 'react';

const Image = (props) => {
  const static_data = props.static_data;
  const name = static_data['name'];
  const image = static_data['icon'];

  return (
    <div id="item-img">
      <img src={`${image}`} width="100px" alt={name} />
    </div>
  )
}

export default Image;