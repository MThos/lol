import '../../css/champion/champion.css';
import React from 'react';
import data_dragon from '../../data_dragon/champion.json';

const Champions = () => {
  if (Object.keys(data_dragon).length > 0) {
    return (
      <section>
        <div id="champions" className="fade-in">
          {Object.keys(data_dragon).length > 0 && Object.keys(data_dragon.data).map((key, i) => (
            <div className="champion" key={i}>
              <a href={`/champion/${data_dragon['data'][key]['name']}`}>
                <img src={`images/compressed/champion/${data_dragon['data'][key]['image']['full'].slice(0, -4)}.webp`} loading="lazy" width="120px" alt={data_dragon['data'][key]['name']} />
              </a>
              <p>{FixChampionNames(data_dragon['data'][key]['name'])}</p>
            </div>
          ))}
        </div>
      </section>
    )
  } else {
    return null;
  }  
}

const FixChampionNames = (name) => {
  // weird champion naming
  if (name.toUpperCase() === "NUNU & WILLUMP") {
    return "Nunu";
  } else {
    return name;
  }
}

export default Champions;