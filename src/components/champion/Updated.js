import React from 'react';
import Heading from './Heading';

const Updated = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-update">
      <Heading title="Updated" />
      <div>{static_data['patchLastChanged']}</div>
    </div>
  )
}

export default Updated;