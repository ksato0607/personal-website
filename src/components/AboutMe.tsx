import React from 'react';
import Icon from './Icon';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../src/assets/my-profile-image.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <React.Fragment>
      <img id="profile-image" src={profileImage} alt="profile" />
      <span className="is-size-2">Keisuke Sato</span>
      <span className="is-size-5 container is-size-6-mobile is-max-desktop mx-4">
        Software engineer specializing in data aggregation in fintech and real-time interactive engineering projects
        which combine people, design and technology. Has worked on a diverse range of projects from creating an
        interactive projection mapping as part of Zushi Art Festival, and being a founding member of a
        startup called MatchHat which is a global platform that helps creators find collaborators for their passion
        projects.
      </span>
      <div id="icons" className="is-size-1">
        <Icon url="https://github.com/ksato0607" reactIcon={<FaGithub />} />
        <Icon url="https://www.youtube.com/channel/UCzosx8yNdW6qPyUoKp-VtAg/videos" reactIcon={<FaYoutube />} />
        <Icon url="https://www.linkedin.com/in/keisuke-sato/" reactIcon={<FaLinkedin />} />
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
