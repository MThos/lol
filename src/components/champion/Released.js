import React from 'react';
import Heading from './Heading';

const Released = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-release">
      <Heading title="Released" />
      <div>{static_data['releaseDate']}</div>
      <div>{static_data['releasePatch']}</div>
    </div>
  )
}

export default Released;