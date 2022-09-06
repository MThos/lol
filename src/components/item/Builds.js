import React from 'react';

const Builds = (props) => {
  const static_data = props.static_data;
  const data_dragon = props.data_dragon;
  const type = props.type;
  const builds = (type === "from" ? static_data['buildsFrom'] : static_data['buildsInto']);
  const build_list = [];

  if (builds.length > 0) {
    builds.forEach((key, index) => {
      build_list.push(
        <div className="item-build" key={index}>
          <a href={`/item/${key}`}>
            <div>
              <img className="item-build-img" src={`../images/compressed/item/${key}.webp`} alt={key} />
              <div className="item-build-name">{data_dragon[key]['name']}</div>
            </div>
          </a>
        </div>)
    });
  }
  
  if (build_list.length > 0) {
    return (
      <div id="item-builds-list">
        {build_list}
      </div>
    )
  } else {
    return (
      <div className="item-build-none">NO ITEMS</div>
    )
  }
}

export default Builds;