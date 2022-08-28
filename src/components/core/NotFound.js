import React from 'react';

const NotFound = () => {
  return(    
    <section>
      <div id="not-found">
        <div id="not-found-top">
          <h1>404</h1>
        </div>
        <img id="not-found-img" src={process.env.PUBLIC_URL + "/images/compressed/teemo_cry.webp"} width="300px" alt="Not Found" />
        <div id="not-found-quote">
          <h3>That page must be lost &#8212; but a wise man once said...</h3>
          <h2>"No one who wanders is ever truly lost."</h2>
          <h4>- Ivern, the Green Father</h4>
        </div>
      </div>
    </section>
  );
}

export default NotFound;