import React from 'react';
import ReactPlayer from 'react-player';
import matchhatImage from '../assets/matchhat-top-page.png';
import './Highlight.css';

function Highlight() {
  return (
    <React.Fragment>
      <h1 className="is-size-2">Projects Highlight</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=CFBeNRFlvdM"
        width="800px"
        height="450px"
        style={{ height: 'auto', maxWidth: '90%' }}
      />
      <span className="px-2 is-size-6">Interactive video meditation presented in Zushi Art Festival 2020</span>

      <br />
      <a className='matchhat'href="https://matchhat.com" target="_blank" rel="noreferrer">
        <img src={matchhatImage} alt="matchhat" />
      </a>
      <span className="px-2 is-size-6 matchhat">
        Web application where users can find collaborators from different backgrounds and fields to realize their
        passion projects, and take their creativity to the next level.
      </span>
    </React.Fragment>
  );
}

export default Highlight;
