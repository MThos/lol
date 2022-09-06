import React from 'react';
import Heading from './Heading';

const Passives = (props) => {
  const static_data = props.static_data;

  if (Object.keys(static_data['passives']).length > 0) {
    return (
      <div id="item-passives">
        <Heading title="PASSIVE EFFECT" />
        <div className="item-passive" key={static_data['passives']['name']}>
          <div>{ Passive(static_data) }</div>
        </div>
      </div>
    )
  } else {
    return null;
  }  
}

const Passive = (static_data) => {
  const passive_data = static_data['passives'];
  const effect = passive_data[0]['effects'];

  return (
    effect.replace(/{{.*?\||}}|'|[^a-zA-Z 0-9 . % -]/g, "")
  )
}

export default Passives;