import React from 'react';
import Heading from './Heading';

const Tips = (props) => {
  const type = (props.type === "friendly" ? "FRIENDLY" : "ENEMY");
  const typeKey = (type === "friendly" ? "allytips" : "enemytips");
  const data_dragon = props.data_dragon;
  const champion_name = props.champion_name;

  return (
    <div className="champion-tip">
      <Heading title={`${type} tips`} image="checkmark" />
      {
        data_dragon[champion_name][typeKey].map((key) => (
          <div key={key}>
            <p>{key}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Tips;