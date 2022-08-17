import React from 'react';
import Heading from './Heading';

const Lore = (props) => {
  const static_data = props.static_data;
  const lore = static_data['lore'];

  return (
    <div id="champion-lore">      
      <Heading title="short story" />
      <div id="champion-lore-story">"{lore}"</div>
    </div>
  )
}

export default Lore;