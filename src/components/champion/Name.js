import React from 'react';

const Name = (props) => {
  const static_data = props.static_data;
  const name = static_data['name'];

  return (
    <div id="champion-name">
      {name}
    </div>
  )
}

export default Name;