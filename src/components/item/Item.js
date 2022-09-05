import '../../css/item/item.css';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from '../core/NotFound';
import Name from './Name';
import Image from './Image';
import Price from './Price';
import Title from './Title';
import Usage from './Usage';
import Tier from './Tier';
import Builds from './Builds';
import Heading from './Heading';

const Item = () => {
  const location = useLocation();
  const item_name = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
  const data_imported = useRef(false);
  const [static_data, setStaticData] = useState([]);
  const [data_dragon, setDataDragon] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    if (data_imported.current === false) {
      import(`../../lolstaticdata/items/${item_name}.json`)
      .then((res) => setStaticData(res))
      .catch((err) => setError(err));

      import(`../../data_dragon/item.json`)
      .then((res) => setDataDragon(res.data))
      .catch((err) => setError(err));

      data_imported.current = true;
    }
  }, [item_name]);

  if (Object.keys(static_data).length > 0) {
    return (
      <section>
        <div id="item-detail" className="fade-in">
          <Name static_data={static_data} />
          <Title static_data={static_data} />
          <Image static_data={static_data} />
          <Tier static_data={static_data} />
          <Price static_data={static_data} />
          <Usage static_data={static_data} />
          <div id="item-builds">
            <Heading title="BUILDS INTO THESE ITEMS" />
            <Builds static_data={static_data} data_dragon={data_dragon} type="into" />
          </div>
          <div id="item-builds">
            <Heading title="BUILDS FROM THESE ITEMS" />
            <Builds static_data={static_data} data_dragon={data_dragon} type="from" />
          </div>
        </div>        
      </section>
    )
  } else if (Object.keys(error).length > 0) {
    console.log(error);
    return(
      <NotFound />
    )
  } else {
    return null;
  }
}

export default Item;