import React from 'react';
import Heading from './Heading';

const Released = (props) => {
  const static_data = props.static_data;
  const release_date = static_data['releaseDate'];
  const release_patch = static_data['releasePatch'];

  return (
    <div id="champion-release">
      <Heading title="Released" />
      <div>{release_date}</div>
      <div>{release_patch}</div>
    </div>
  )
}

export default Released;