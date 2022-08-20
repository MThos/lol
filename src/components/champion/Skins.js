import React from 'react';

const Skins = (props) => {  
  const static_data = props.static_data;
  const skins = static_data['skins'];
  const skin_list = [];

  skins.forEach(key => {
    if (key.cost === "special") {
      skin_list.push(
        <div className="champion-skin" key={key.name}>
          <div>
            <img className="champion-skin-img" src={key.tilePath} alt={key.name} />
          </div>
          <div className="champion-skin-name">{key.name}</div>
          <div className="champion-skin-price">{key.cost.toUpperCase()}</div>
          <div>{key.availability}</div>
          <div>{key.release}</div>
        </div>)
    } else {
      skin_list.push(
        <div className="champion-skin" key={key.name}>
          <div>
            <img className="champion-skin-img" src={key.tilePath} alt={key.name} />
          </div>
          <div className="champion-skin-name">{key.name}</div>
          <div className="champion-skin-price">{key.cost} <img className="champion-skin-price-img" src="../images/compressed/RP_icon.webp" alt={key.name} /></div>
          <div>{key.availability}</div>
          <div>{key.release}</div>
        </div>)
    }
  });
  
  return (
    <div id="champion-skins-list">
      {skin_list}
    </div>
  )
}

export default Skins;