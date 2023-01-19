import React from 'react';
import Heading from './Heading';

const Tips = (props) => {
  const type = (props.type === "friendly" ? "FRIENDLY" : "ENEMY");
  const type_key = (props.type === "friendly" ? "allytips" : "enemytips");
  const data_dragon = props.data_dragon;
  const champion_name = props.champion_name;

  if (data_dragon[champion_name][type_key].length === 0) {
    return (
      <div className="champion-tip">
        <Heading title={`${type} tips`} image="checkmark" />
        <div className="champion-tip-empty" key={type_key}>
          <p>&#183; NO TIPS FOUND &#183;</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="champion-tip">
        <Heading title={`${type} tips`} image="checkmark" />
        {
          data_dragon[champion_name][type_key].map((key) => (
            <div key={key}>
              <p>{key}</p>
            </div>
          ))
        }
      </div>
    )
  }  
}

export default Tips;