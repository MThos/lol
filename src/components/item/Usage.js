import React from 'react';
import Heading from './Heading';

const Usage = (props) => {
  const static_data = props.static_data;

  if (static_data['shop']['tags'].length > 0) {
    return (
      <div id="item-usages">
        <Heading title="WHAT IS THIS ITEM USED FOR" />
        <div id="item-usage-flex">
          { Tags(static_data) }
        </div>      
      </div>
    )
  } else {
    return null;
  }  
}

const Tags = (static_data) => {
  const tag = static_data['shop']['tags'];

  return (
    <div className="item-usage" key={tag}>
      {tag.join(' / ').toLowerCase().replace(/[^a-zA-Z / ]/g, " ")}
    </div>
  )
}

export default Usage;