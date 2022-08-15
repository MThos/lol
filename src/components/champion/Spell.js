import React from 'react';

const Spell = (props) => {
  const skill = props.skill;
  const static_data = props.static_data;
  
  return (
    <div id="champion-spell">
      <div className="champion-spell" key={static_data['abilities'][skill][0]['name']}>
        <div className="champion-spells-row-top">
          <img className="champion-spell-img" src={static_data['abilities'][skill][0]['icon']} alt={static_data['abilities'][skill][0]['name']} />
          <div className="champion-spell-name">
            {static_data['abilities'][skill][0]['name']}
          </div>
          <div className="champion-spell-key bold">
            Key &#183; {skill}
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Targetting: <span className="bold">{static_data['abilities'][skill][0]['targeting']}</span>
          </div>
          <div className="text-align-center">
            Affects: <span className="bold">{static_data['abilities'][skill][0]['affects']}</span>
          </div>
          <div className="text-align-right">
            Element: <span className="bold">{static_data['abilities'][skill][0]['damageType'] ? static_data['abilities'][skill][0]['damageType'].replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None"}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Range: <span className="bold">{static_data['abilities'][skill][0]['targetRange'] ? static_data['abilities'][skill][0]['targetRange'] : "None"}</span>
          </div>
          <div className="text-align-center">
            Radius: <span className="bold">{static_data['abilities'][skill][0]['effectRadius'] ? static_data['abilities'][skill][0]['effectRadius'] : "None"}</span>
          </div>
          <div className="text-align-right">
            Resource: <span className="bold">{static_data['abilities'][skill][0]['resource'] ? static_data['abilities'][skill][0]['resource'].replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None"}</span>
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Cooldown: <span className="bold color-green">{static_data['abilities'][skill][0]['cooldown'] ? static_data['abilities'][skill][0]['cooldown']['modifiers'][0]['values'].join(' / ') : "None"}</span>
          </div>
          <div className="text-align-center">
            Cost: <span className="bold color-red">{static_data['abilities'][skill][0]['cost'] ? static_data['abilities'][skill][0]['cost']['modifiers'][0]['values'].join(' / ') : "None"}</span>
          </div>
          <div className="text-align-right">
            Shieldable: <span className={`bold ${static_data['abilities'][skill][0]['spellshieldable'] === "True" || static_data['abilities'][skill][0]['spellshieldable'] ? "color-green" : "color-red"}`}>{static_data['abilities'][skill][0]['spellshieldable'] === "True" || static_data['abilities'][skill][0]['spellshieldable'] ? "Yes" : "No"}</span>
          </div>
        </div>
        {
          static_data['abilities'][skill][0]['effects'].map((key) => (
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