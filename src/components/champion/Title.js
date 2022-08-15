import React from 'react';

const Title = (props) => {
  const static_data = props.static_data;

  return (
    <div id="champion-title">
      &#183;{static_data['title']}&#183;
    </div>
  )
}

export default Title;