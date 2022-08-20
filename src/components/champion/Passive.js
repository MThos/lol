import React from 'react';

const Passive = (props) => {
  const hotkey = props.hotkey;
  const static_data = props.static_data;
  const name = static_data['abilities'][hotkey][0]['name'];
  const icon = static_data['abilities'][hotkey][0]['icon'];
  const targetting = static_data['abilities'][hotkey][0]['targeting'];
  const effects = static_data['abilities'][hotkey][0]['affects'];
  const element = static_data['abilities'][hotkey][0]['damageType'];
  const element_lower = (element ? element.replace(/[^a-zA-Z ]/g, " ").toLowerCase() : "None");

  let element_color = "";
  if (element_lower.includes("magic")) {
    element_color = "color-blue";
  } else if (element_lower.includes("physical")) {
    element_color = "color-brown"
  }
  
  return (
    <div id="champion-passive">
      <div className="champion-spell" key={name}>
        <div className="champion-spells-row-top">
          <img className="champion-spell-img" src={icon} alt={name} />
          <div className="champion-spell-name">
            {name}
          </div>
          <div className="champion-spell-key bold">
            PASSIVE
          </div>
        </div>
        <div className="champion-spells-row">
          <div className="text-align-left">
            Targetting: <span className="bold">{targetting}</span>
          </div>
          <div className="text-align-center">
            Affects: <span className="bold">{effects}</span>
          </div>
          <div className="text-align-right">
            Element: <span className={`bold ${element_color}`}>{element_lower}</span>
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