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
        controls={true}
        width="800px"
        height="450px"
        style={{ height: 'auto', maxWidth: '90%' }}
      />
      <span className="px-2 is-size-6 highlight-project">
        Interactive projection mapping presented in Zushi Art Festival 2020. Involved as a co-director to generate the
        concept of the installation, and as an software engineer to develop different effect patterns using Touch Designer & Kinect.
      </span>

      <br />
      <a className="highlight-project" href="https://matchhat.com" target="_blank" rel="noreferrer">
        <img src={matchhatImage} alt="matchhat" />
      </a>
      <span className="px-2 is-size-6 highlight-project">
        Global platform where users can find collaborators from different backgrounds and fields to realize their
        passion projects. Involved as a full-stack engineer to add new features on frontend & backend, and also
        introduced end-to-end testing framework and monitoring system to the platform.
      </span>
    </React.Fragment>
  );
}

export default Highlight;
