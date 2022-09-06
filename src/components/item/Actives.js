import React from 'react';
import Heading from './Heading';

const Actives = (props) => {
  const static_data = props.static_data;

  if (Object.keys(static_data['active']).length > 0) {
    return (
      <div id="item-actives">
        <Heading title="ACTIVE EFFECT" />
        <div className="item-active" key={static_data['active']['name']}>
          <div>{ Active(static_data) }</div>
        </div>
      </div>
    )
  } else {
    return null;
  }  
}

const Active = (static_data) => {
  const active_data = static_data['active'];
  const effect = active_data[0]['effects'];

  return (
    effect.replace(/{{.*?\||}}|'|[^a-zA-Z 0-9 . % -]/g, " ")
  )
}

export default Actives;