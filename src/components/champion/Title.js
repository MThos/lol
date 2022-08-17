import React from 'react';

const Title = (props) => {
  const static_data = props.static_data;
  const title = static_data['title'];

  return (
    <div id="champion-title">
      &#183;{title}&#183;
    </div>
  )
}

export default Title;