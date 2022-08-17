import React from 'react';
import Heading from './Heading';

const Updated = (props) => {
  const static_data = props.static_data;
  const last_updated = static_data['patchLastChanged'];

  return (
    <div id="champion-update">
      <Heading title="Updated" />
      <div>{last_updated}</div>
    </div>
  )
}

export default Updated;