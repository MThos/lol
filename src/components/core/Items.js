import '../../css/item/item.css';
import React from 'react';
import data_dragon from '../../data_dragon/item.json';

const Items = () => {
  if (Object.keys(data_dragon).length > 0) {
    return (
      <section>
        <div id="items" className="fade-in">
          {Object.keys(data_dragon).length > 0 && Object.keys(data_dragon.data).map((key, i) => (
            ItemCheck(key, i)
          ))}
        </div>
      </section>
    )
  } else {
    return null;
  }  
}

const ItemCheck = (key, i) => {
  const name = data_dragon['data'][key]['name'];
  if (name.toString().substring(0, 1) !== "<" && name !== "Gangplank Placeholder") {
    return(
      <div className="item" key={i}>
        <a href={`/item/${key}`}>
          <img src={`images/compressed/item/${data_dragon['data'][key]['image']['full'].slice(0, -4)}.webp`} loading="lazy" width="120px" alt={name} />
        </a>
        <p>{name}</p>
      </div>
    )
  }  
}

export default Items;