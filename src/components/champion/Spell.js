import React from 'react';

const Spell = (props) => {
  const hotkey = props.hotkey;
  const static_data = props.static_data;
  const name = static_data['abilities'][hotkey][0]['name'];
  const icon = static_data['abilities'][hotkey][0]['icon'];
  const targetting = (static_data['abilities'][hotkey][0]['targeting'] ? static_data['abilities'][hotkey][0]['targeting'] : "None");
  const affects = (static_data['abilities'][hotkey][0]['affects'] ? static_data['abilities'][hotkey][0]['affects'] : "None");
  const element = static_data['abilities'][hotkey][0]['damageType'];
  const element_lower = (element ? element.replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None");
  const range = (static_data['abilities'][hotkey][0]['targetRange'] ? static_data['abilities'][hotkey][0]['targetRange'] : "None");
  const radius = (static_data['abilities'][hotkey][0]['effectRadius'] ? static_data['abilities'][hotkey][0]['effectRadius'] : "None");
  const resource = static_data['abilities'][hotkey][0]['resource'];
  const resource_lower = (resource ? resource.replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None");
  const cooldown = static_data['abilities'][hotkey][0]['cooldown'];
  const cooldown_mods = (cooldown ? static_data['abilities'][hotkey][0]['cooldown']['modifiers'][0]['values'].join(' / ') : "None");
  const cost = static_data['abilities'][hotkey][0]['cost'];
  const cost_mods = (cost ? static_data['abilities'][hotkey][0]['cost']['modifiers'][0]['values'].join(' / ') : "None");
  const shieldable = (static_data['abilities'][hotkey][0]['spellshieldable'] ? "Yes" : "No");
  //const notes = (static_data['abilities'][hotkey][0]['notes'] ? static_data['abilities'][hotkey][0]['notes'] : "");

  let element_color = "";
  if (element_lower.includes("magic")) {
    element_color = "color-blue";
  } else if (element_lower.includes("physical")) {
    element_color = "color-brown"
  }

  let resource_color = "";
  if (resource_lower.includes('mana')) {
    resource_color = "color-blue";
  } else if (resource_lower.includes('rage') || resource_lower.includes('health')) {
    resource_color = "color-red"
  } else if (resource_lower.includes('energy')) {
    resource_color = "color-yellow";
  }

  let shield_color = "color-red";
  if (shieldable === "Yes") {
    shield_color = "color-green";
  }

  
  return (
    <div id="champion-spell">
      <div className="champion-spell">
        <div className="champion-spells-row-top">
          <img className="champion-spell-img" src={icon} alt={name} />
          <div className="champion-spell-name">
            {name}
          </div>
          <div className="champion-spell-key bold">
            KEY &#183; {hotkey}
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Targetting: <span className="bold">{targetting}</span>
          </div>
          <div className="text-align-center">
            Affects: <span className="bold">{affects}</span>
          </div>
          <div className="text-align-right">
            Element: <span className={`bold ${element_color}`}>{element_lower}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Range: <span className="bold">{range}</span>
          </div>
          <div className="text-align-center">
            Radius: <span className="bold">{radius}</span>
          </div>
          <div className="text-align-right">
            Resource: <span className={`bold ${resource_color}`}>{resource_lower}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Cooldown: <span className="bold color-green">{cooldown_mods}</span>
          </div>
          <div className="text-align-center">
            Cost: <span className="bold color-red">{cost_mods}</span>
          </div>
          <div className="text-align-right">
            Shieldable: <span className={`bold ${shield_color}`}>{shieldable}</span>
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

export default Spell;