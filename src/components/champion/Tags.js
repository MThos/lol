import React from 'react';
import Heading from './Heading';

const Tags = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-tags">
      <Heading title="class" />
      {
        static_data['roles'].map((key) => (
          <div className="champion-tag" key={key}>
            {key}
          </div>
        ))
      }
    </div>
  )
}

export default Tags;