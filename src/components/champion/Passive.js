import React from 'react';
import { ColorOptions } from '../../helpers';

const Passive = (props) => {
  const hotkey = props.hotkey;
  const static_data = props.static_data;
  const name = static_data['abilities'][hotkey][0]['name'];
  const icon = static_data['abilities'][hotkey][0]['icon'];
  const targetting = static_data['abilities'][hotkey][0]['targeting'];
  const effects = static_data['abilities'][hotkey][0]['affects'];
  const element = static_data['abilities'][hotkey][0]['damageType'];
  const element_lower = (element ? element.replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None");
  
  return (
    <div id="champion-passive">
      <div className="champion-spell" key={name}>
        <div className="champion-spells-row-top">
          <div className="text-align-left">
            <img className="champion-spell-img" width="90px" height="90px" loading="lazy" src={icon} alt={name} />
          </div>
          <div className="champion-spell-name text-align-center">
            {name}
          </div>
          <div className="champion-spell-key text-align-right bold">
            PASSIVE
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            <span className="champion-spells-row-key">Targetting</span> <span className="bold">{targetting}</span>
          </div>
          <div className="text-align-center">
            <span className="champion-spells-row-key">Affects</span> <span className="bold">{effects}</span>
          </div>
          <div className="text-align-right">
            <span className="champion-spells-row-key">Element</span> <span className={`bold ${ColorOptions("element", element_lower)}`}>{element_lower}</span>
          </div>
        </div>
        {
          static_data['abilities'][hotkey][0]['effects'].map((key) => (
            <div className="champion-spell-description" key={key.description}>
              {key.description}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Passive;