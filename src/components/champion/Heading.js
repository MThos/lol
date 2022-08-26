import React from 'react';

const Heading = (props) => {
  const title = props.title;
  const image = props.image;

  if (image && typeof(image) === 'object' && Object.keys(image).length === 2) {
    return (
      <div className="champion-heading">
        <img className="champion-heading-img" src={`../images/compressed/${image[0]}.webp`} alt={image} />
        {title.toUpperCase()}
        <img className="champion-heading-img" src={`../images/compressed/${image[1]}.webp`} alt={image} />
      </div>
    )
  } else if (image && typeof(image) === 'string') {
    return (
      <div className="champion-heading">
        <img className="champion-heading-img" src={`../images/compressed/${image}.webp`} alt={image} />
        {title.toUpperCase()}
        <img className="champion-heading-img" src={`../images/compressed/${image}.webp`} alt={image} />
      </div>
    )
  } else {
    return (
      <div className="champion-heading">
        {title.toUpperCase()}
      </div>
    )
  }
}

export default Heading;