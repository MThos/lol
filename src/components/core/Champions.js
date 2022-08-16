import React from 'react';
import data_dragon from '../../data_dragon/champion.json';
import Patch from './Patch';

const Champion = () => {
  return (
    <section>
      <div id="champions">
        {Object.keys(data_dragon).length > 0 && Object.keys(data_dragon.data).map((key, i) => (
          <div className="champion" key={i}>
            <a href={`/champion/${data_dragon['data'][key]['name']}`}>
              <img src={`images/compressed/champion/${data_dragon['data'][key]['image']['full']}`} alt={data_dragon['data'][key]['name']} />
            </a>
            <p>{data_dragon['data'][key]['name']}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Champion;