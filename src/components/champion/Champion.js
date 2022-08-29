import '../../css/champion/champion.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import Skins from './Skins';
import NotFound from '../core/NotFound';
import AnimateStyled from 'animate-styled';

const Champion = () => {
  const champion_name = FixChampionNames(); // fix abnormal champion names

  const [static_data, setStaticData] = useState([]);
  const [datadragon, setDataDragon] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    import(`../../lolstaticdata/champions/${champion_name}.json`)
    .then((res) => setStaticData(res))
    .catch(err => setError(err));

    import(`../../data_dragon/champion/${champion_name}.json`)
    .then((res) => setDataDragon(res.data))
    .catch(err => setError(err));
  }, [champion_name]);

  if (Object.keys(static_data).length > 0 & Object.keys(datadragon).length > 0) {        
    return (
      <section>
        <AnimateStyled name="fadeIn" iterationCount="1" duration="1s">
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
            <Separator />
            <div id="champion-abilities">
              <Heading title="PASSIVE + ABILITIES" image={["sword_fire", "fire"]} />
              <Passive hotkey="P" static_data={static_data} />
              <Separator />
              <Spell hotkey="Q" static_data={static_data} />
              <Separator />
              <Spell hotkey="W" static_data={static_data} />
              <Separator />
              <Spell hotkey="E" static_data={static_data} />
              <Separator />
              <Spell hotkey="R" static_data={static_data} />
            </div>
            <Separator />
            <div id="champion-skins">
              <Heading title="SKIN PURCHASES" />
              <Skins static_data={static_data} />
            </div>
          </div>
        </AnimateStyled>
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

const FixChampionNames = () => {
  // clear special characters and spaces (Dr.Mundo, Kha'Zix, Master Yi, etc)
  const location = useLocation();
  const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1).replace(/[^a-zA-Z ]/g, "");

  // weird champion naming
  if (path === "Wukong") {
    return "MonkeyKing";
  } else if (path === "NunuWillump") {
    return "Nunu";
  } else if (path === "BelVeth") {
    return "Belveth";
  } else if (path === "ChoGath") {
    return "Chogath";
  } else if (path === "KaiSa") {
    return "Kaisa";
  } else if (path === "KhaZix") {
    return "Khazix";
  } else if (path === "RekSai") {
    return "Reksai";
  } else if (path === "VelKoz") {
    return "Velkoz";
  } else if (path === "RenataGlasc") {
    return "Renata";
  } else {
    return path;
  }
}

export default Champion;