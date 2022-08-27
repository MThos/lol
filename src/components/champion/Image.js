import React from 'react';

const Image = (props) => {
  const champion_name = props.champion_name;

  return (
    <div id="champion-img">
      <img src={`../images/compressed/champion/tiles/${champion_name}_0.webp`} width="300px" alt={champion_name} />
    </div>
  )
}

export default Image;