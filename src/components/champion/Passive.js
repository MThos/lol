import React from 'react';

const Passive = (props) => {
  const skill = props.skill;
  const static_data = props.static_data;
  
  return (
    <div id="champion-passive">
      <div className="champion-spell" key={static_data['abilities'][skill][0]['name']}>
        <div className="champion-spells-row-top">
          <img className="champion-spell-img" src={static_data['abilities'][skill][0]['icon']} alt={static_data['abilities'][skill][0]['name']} />
          <div className="champion-spell-name">
            {static_data['abilities'][skill][0]['name']}
          </div>
          <div className="champion-spell-key bold">
            PASSIVE
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

export default Passive;