import React from 'react';

const Title = (props) => {
  const static_data = props.static_data;
  const title = static_data['simpleDescription'];

  if (title) {
    return (
      <div id="item-title">
        "{title}"
      </div>
    )
  } else {
    return null;
  }
}

export default Title;