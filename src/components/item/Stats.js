import React from 'react';
import Heading from './Heading';
import { StatCrossReference, StatModCrossReference } from '../../helpers';

const Stats = (props) => {
  const static_data = props.static_data;

  if (Object.keys(static_data['stats']).length > 0) {
    return (
      <div id="item-stats">
        <Heading title="STAT MODIFIERS" />
        <div id="item-stat-flex">
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
        stat_collection.push([StatCrossReference(key), StatModCrossReference(stat_type[0], stat_type[1])]);
      }
    })
  });

  stat_collection.map((key => (
    stat_arr.push(
      <div className="item-stat" key={key}>
        <div>{key[0]} = <span className="color-green">+{key[1]}</span></div>
      </div>
    )
  )));

  return (
    stat_arr
  )
}

export default Stats;