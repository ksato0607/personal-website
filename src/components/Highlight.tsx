import React from 'react';
import ReactPlayer from 'react-player';

function Highlight() {
  return (
    <React.Fragment>
      <h1 className="is-size-2">Highlight</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=CFBeNRFlvdM"
        width="800px"
        height="450px"
        style={{ height: 'auto', maxWidth: '100%' }}
      />
      <span className="pr-2 pl-2 is-size-6">Interactive video meditation presented in Zushi Art Festival 2020</span>
    </React.Fragment>
  );
}

export default Highlight;
