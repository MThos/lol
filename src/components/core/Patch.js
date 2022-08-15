import React from 'react';

const Patch = () => {
  return (
    <div id="patch">
      {process.env.REACT_APP_PATCH_VERSION}
    </div>
  )
}

export default Patch;