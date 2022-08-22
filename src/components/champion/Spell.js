import React from 'react';
import { ColorOptions, HideEmptyDescriptions } from '../../helpers';

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
  const cooldown_mods = (cooldown ? static_data['abilities'][hotkey][0]['cooldown']['modifiers'][0]['values'].join('/') : "None");
  const cost = static_data['abilities'][hotkey][0]['cost'];
  const cost_mods = (cost ? static_data['abilities'][hotkey][0]['cost']['modifiers'][0]['values'].join('/') : "None");
  const shieldable = (static_data['abilities'][hotkey][0]['spellshieldable'] ? "Yes" : "No");
  //const notes = (static_data['abilities'][hotkey][0]['notes'] ? static_data['abilities'][hotkey][0]['notes'] : "");
  
  return (
    <div id="champion-spell">
      <div className="champion-spell">
        <div className="champion-spells-row-top">
          <div className="text-align-left">
            <img className="champion-spell-img" src={icon} alt={name} />
          </div>
          <div className="champion-spell-name text-align-center">
            {name}
          </div>
          <div className="champion-spell-key text-align-right bold">
            KEY &#183; {hotkey}
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            <span className="champion-spells-row-key">Targetting</span> <span className="bold">{targetting}</span>
          </div>
          <div className="text-align-center">
            <span className="champion-spells-row-key">Affects</span> <span className="bold">{affects}</span>
          </div>
          <div className="text-align-right">
            <span className="champion-spells-row-key">Element</span> <span className={`bold ${ColorOptions("element", element_lower)}`}>{element_lower}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            <span className="champion-spells-row-key">Range</span> <span className="bold">{range}</span>
          </div>
          <div className="text-align-center">
            <span className="champion-spells-row-key">Radius</span> <span className="bold">{radius}</span>
          </div>
          <div className="text-align-right">
            <span className="champion-spells-row-key">Resource</span> <span className={`bold ${ColorOptions("resource", resource_lower)}`}>{resource_lower}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            <span className="champion-spells-row-key">Cooldown</span> <span className="bold color-green">{cooldown_mods}</span>
          </div>
          <div className="text-align-center">
            <span className="champion-spells-row-key">Cost</span> <span className="bold color-red">{cost_mods}</span>
          </div>
          <div className="text-align-right">
            <span className="champion-spells-row-key">Shieldable</span> <span className={`bold ${ColorOptions("shield", shieldable)}`}>{shieldable}</span>
          </div>
        </div>
        {
          static_data['abilities'][hotkey][0]['effects'].map((key) => (
            <div className="champion-spell-description" key={key.description}>
              <div className="champion-spell-description-detail">{key.description}</div>
              <div className="champion-spell-description-detail">{key.leveling[0] ? key.leveling[0].attribute : ""}</div>
              <div className="champion-spell-description-detail">{key.leveling[0] ? key.leveling[0].modifiers[0].values.join('/') : ""}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

HideEmptyDescriptions();

export default Spell;