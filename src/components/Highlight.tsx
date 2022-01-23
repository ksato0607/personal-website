import React from 'react';
import ReactPlayer from 'react-player';
import matchhatImage from '../assets/matchhat-top-page.png';
import { isMobile } from 'react-device-detect';
import './Highlight.css';

function Highlight() {
  return (
    <React.Fragment>
      <span className="is-size-2">Personal Projects Highlight</span>
      <ReactPlayer
        url="https://youtu.be/ZSBIcO_cLRM"
        controls={true}
        muted={true}
        width="800px"
        height={isMobile ? '200px' : '450px'}
        style={{ height: 'auto', maxWidth: '90%' }}
      />
      <span className="px-2 is-size-6 highlight-project">
        Interactive media art presented in Zushi Art Festival 2021. Involved as a co-director to brainstorm the concept,
        coordinate a collaboration with a Unity engineer who had built a boids algorithm, and as an software engineer to
        integrate the algorithm with Kinect on Unity.
      </span>
      <br />

      <ReactPlayer
        url="https://youtu.be/CFBeNRFlvdM"
        controls={true}
        muted={true}
        width="800px"
        height={isMobile ? '200px' : '450px'}
        style={{ height: 'auto', maxWidth: '90%' }}
      />
      <span className="px-2 is-size-6 highlight-project">
        Interactive media art presented in Zushi Art Festival 2020. Involved as a co-director to brainstorm the concept
        of the installation, and as a software engineer to develop different effect patterns using TouchDesigner &
        Kinect.
      </span>
      <br />

      <a className="highlight-project" href="https://matchhat.com" target="_blank" rel="noreferrer">
        <img className="shadow" src={matchhatImage} alt="matchhat" />
      </a>
      <span className="px-2 is-size-6 highlight-project">
        Global platform where users can find collaborators from different backgrounds and fields to realize their
        passion projects. As a founding member & full-stack engineer, improved the web application from frontend,
        backend, database and deployment. Also introduced end-to-end testing framework and monitoring system to the
        platform to enhance the reliability and the observability of the application.
      </span>
    </React.Fragment>
  );
}

export default Highlight;
