import React from 'react';
import Heading from './Heading';

const Lore = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-lore">      
      <Heading title="short story" />
      <div id="champion-lore-story">"{static_data['lore']}"</div>
    </div>
  )
}

export default Lore;