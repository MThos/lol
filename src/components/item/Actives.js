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
  let active_data = static_data['active'][0]['effects'];
  let active_mod = active_data.replace(/{{.*?\||}}|'''|''|\[\[|\]\]/g, "");
  active_mod = active_mod.replace("cr|icononly=true", "");
  active_mod = active_mod.replace("|type=target's level", "");
  active_mod = active_mod.replace("|pp=true", "");
  active_mod = active_mod.replace("ability|ability", "ability");
  active_mod = active_mod.replace("physical damage|physical damage", "physical damage");
  active_mod = active_mod.replace("physical|physical damage", "physical damage");
  active_mod = active_mod.replace("magic|magic damage", "magic damage");
  active_mod = active_mod.replace("shield|shields", "shields");
  active_mod = active_mod.replace("death|lethal damage", "lethal damage");
  active_mod = active_mod.replace("|", "/");
  active_mod = active_mod.replace(/\s+/g, " ");

  return active_mod;
}

export default Actives;