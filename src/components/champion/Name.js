import React from 'react';

const Name = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-name">
      {static_data['name']}
    </div>
  )
}

export default Name;