import '../../css/item/item.css';
import React from 'react';
import data_dragon from '../../data_dragon/item.json';

const Items = () => {
  if (Object.keys(data_dragon).length > 0) {
    return (
      <section>
        <div id="items" className="fade-in">
          {ItemList(data_dragon)}
        </div>
      </section>
    )
  } else {
    return null;
  }  
}

const ItemList = (data_dragon) => {
  const item_arr = [];
  const item_list = [];

  Object.keys(data_dragon).length > 0 && Object.keys(data_dragon.data).map((key, i) => {
    const name = data_dragon['data'][key]['name'];

    if (name.toString().substring(0, 1) !== "<" && name !== "Gangplank Placeholder") {
      item_arr.push([name, [key, i]]);
    }

    return null;
  })

  item_arr.sort();

  item_arr.forEach(key => (
    item_list.push(
      <div className="item" key={key[1][1]}>
        <a href={`/item/${key[1][0]}`}>
          <img src={`images/compressed/item/${data_dragon['data'][key[1][0]]['image']['full'].slice(0, -4)}.webp`} loading="lazy" width="80px" alt={key[0]} />
        </a>
        <p>{key[0]}</p>
    </div>
    )
  ));

  return item_list;
}

export default Items;