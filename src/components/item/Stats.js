import React from 'react';
import Heading from './Heading';
import { StatCrossReference } from '../../helpers';

const Stats = (props) => {
  const static_data = props.static_data;

  if (Object.keys(static_data['stats']).length > 0) {
    return (
      <div id="item-stats">
        <Heading title="STATISTICS MODIFIERS" />
        <div id="item-stat-flex">
          <div className="item-stat-top">
            <div>Stat</div>
            <div>Modifier</div>
            <div>Value</div>
          </div>
          { Stat(static_data) }
        </div>
      </div>
    )
  } else {
    return null;
  }  
}

const Stat = (static_data) => {
  const stats_data = static_data['stats'];
  const stat_collection = [];
  const stat_arr = [];

  Object.keys(stats_data).forEach(key => {
    Object.entries(stats_data[key]).forEach(stat_type => {
      if (stat_type[1] > 0) {
        stat_collection.push([StatCrossReference(key), stat_type[0], stat_type[1]]);
      }
    })
  });

  stat_collection.map((key => (
    stat_arr.push(
      <div className="item-stat" key={key}>
        <div>{key[0]}</div>
        <div>{key[1]}</div>
        <div>{key[2]}</div>
      </div>
    )
  )));

  return (
    stat_arr
  )
}

export default Stats;