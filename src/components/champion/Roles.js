import React from 'react';
import Heading from './Heading';

const Roles = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-roles">
      <Heading title="roles" />
      {
        static_data['roles'].map((key) => (
          <div className="champion-role" key={key}>
            {key}
          </div>
        ))
      }
    </div>
  )
}

export default Roles;