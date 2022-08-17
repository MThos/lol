import React from 'react';

const Spell = (props) => {
  const hotkey = props.hotkey;
  const static_data = props.static_data;
  const name = static_data['abilities'][hotkey][0]['name'];
  const icon = static_data['abilities'][hotkey][0]['icon'];
  const targetting = static_data['abilities'][hotkey][0]['targeting'];
  const affects = static_data['abilities'][hotkey][0]['affects'];
  const element = static_data['abilities'][hotkey][0]['damageType'];
  const range = static_data['abilities'][hotkey][0]['targetRange'];
  const radius = static_data['abilities'][hotkey][0]['effectRadius'];
  const resource = static_data['abilities'][hotkey][0]['resource'];
  const cooldown = static_data['abilities'][hotkey][0]['cooldown'];
  const cooldown_mods = static_data['abilities'][hotkey][0]['cooldown']['modifiers'][0]['values'];
  const cost = static_data['abilities'][hotkey][0]['cost'];
  const cost_mods = static_data['abilities'][hotkey][0]['cost']['modifiers'][0]['values'];
  const shieldable = static_data['abilities'][hotkey][0]['spellshieldable'];
  const notes = static_data['abilities'][hotkey][0]['notes'];
  
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
            Element: <span className="bold">{element ? element.replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None"}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Range: <span className="bold">{range ? range : "None"}</span>
          </div>
          <div className="text-align-center">
            Radius: <span className="bold">{radius ? radius : "None"}</span>
          </div>
          <div className="text-align-right">
            Resource: <span className="bold">{resource ? resource.replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None"}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Cooldown: <span className="bold color-green">{cooldown ? cooldown_mods.join(' / ') : "None"}</span>
          </div>
          <div className="text-align-center">
            Cost: <span className="bold color-red">{cost ? cost_mods.join(' / ') : "None"}</span>
          </div>
          <div className="text-align-right">
            Shieldable: <span className={`bold ${shieldable === "True" || shieldable ? "color-green" : "color-red"}`}>{shieldable || shieldable ? "Yes" : "No"}</span>
          </div>
        </div>
        {
          static_data['abilities'][hotkey][0]['effects'].map((key) => (
            <div className="champion-spell-description" key={key.description}>
              {key.description}
            </div>
          ))
        }
        <div className="champion-spell-description">
          Tips: {notes}
        </div>
      </div>
    </div>
  )
}

export default Spell;