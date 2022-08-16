import '../../css/champion/champion.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Patch from '../core/Patch';
import Heading from './Heading';
import Separator from './Separator';
import Name from './Name';
import Title from './Title';
import Price from './Price';
import Roles from './Roles';
import Tips from './Tips';
import Lore from './Lore';
import Image from './Image';
import Passive from './Passive';
import Spell from './Spell';
import Released from './Released';
import Updated from './Updated';

const Champion = () => {  
  const location = useLocation();
  //clear special characters and spaces (Dr.Mundo, Kha'Zix, Master Yi, etc)
  const champion_name = location.pathname.substring(location.pathname.lastIndexOf('/') + 1).replace(/[^a-zA-Z ]/g, "");

  const [static_data, setStaticData] = useState([]);
  const [datadragon, setDataDragon] = useState([]);

  useEffect(() => {
    import(`../../lolstaticdata/champions/${champion_name}.json`)
    .then((res) => setStaticData(res))
    .catch(err => console.log(err));

    import(`../../data_dragon/champion/${champion_name}.json`)
    .then((res) => setDataDragon(res.data))
    .catch(err => console.log(err));
  }, [champion_name]);

  if (Object.keys(static_data).length > 0 & Object.keys(datadragon).length > 0) {
    return (
      <section>
        <div id="champion-detail">
          <Name static_data={static_data} />
          <Title static_data={static_data} />
          <Image champion_name={champion_name} />
          <Price static_data={static_data} />
          <div id="champion-roles-release">
            <Released static_data={static_data} />
            <Roles static_data={static_data} />
            <Updated static_data={static_data} />
          </div>
          <Lore static_data={static_data} />
          <div id="champion-tips">
            <Tips type="friendly" data_dragon={datadragon} champion_name={champion_name} />
            <Tips type="enemy" data_dragon={datadragon} champion_name={champion_name} />
          </div>
          <div id="champion-abilities">
            <Heading title="PASSIVE + ABILITIES" image={["sword_fire", "fire"]} />
            <Passive skill="P" static_data={static_data} />
            <Separator />
            <Spell skill="Q" static_data={static_data} />
            <Separator />
            <Spell skill="W" static_data={static_data} />
            <Separator />
            <Spell skill="E" static_data={static_data} />
            <Separator />
            <Spell skill="R" static_data={static_data} />
            <Separator />
          </div>            
        </div>        
      </section>
    )
  } else {
    return null;
  }
}

export default Champion;