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
  let passive_data = static_data['passives'][0]['effects'];
  let passive_mod = passive_data.replace(/{{.*?\||}}|'''|''|\[\[|\]\]/g, "");
  passive_mod = passive_mod.replace("cr|icononly=true", "");
  passive_mod = passive_mod.replace("|type=target's level", "");
  passive_mod = passive_mod.replace("|pp=true", "");
  passive_mod = passive_mod.replace("ability|ability", "ability");
  passive_mod = passive_mod.replace("physical damage|physical damage", "physical damage");
  passive_mod = passive_mod.replace("physical|physical damage", "physical damage");
  passive_mod = passive_mod.replace("magic|magic damage", "magic damage");
  passive_mod = passive_mod.replace("shield|shields", "shields");
  passive_mod = passive_mod.replace("death|lethal damage", "lethal damage");
  passive_mod = passive_mod.replace("|", "/");
  passive_mod = passive_mod.replace(/\s+/g, " ");

  return passive_mod;
}

export default Passives;