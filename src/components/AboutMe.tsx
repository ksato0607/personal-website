import React from 'react';
import Icon from './Icon';
import { FaGithub, FaYoutube, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';
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
        interactive projection mapping as part of Zushi Art Festival, and being a founding member of a startup called
        MatchHat which is a global platform that helps creators find collaborators for their passion projects.
      </span>
      <div id="icons" className="is-size-1">
        <Icon url="https://github.com/ksato0607" reactIcon={<FaGithub />} color="#089037" />
        <Icon
          url="https://www.youtube.com/channel/UCzosx8yNdW6qPyUoKp-VtAg/videos"
          reactIcon={<FaYoutube />}
          color="#dc4332"
        />
        <Icon url="https://www.linkedin.com/in/keisuke-sato/" reactIcon={<FaLinkedin />} color="#3273dc" />
        <Icon
          url="https://www.instagram.com/keisuke_sato_engineer/"
          reactIcon={<FaInstagramSquare />}
          color="#dc329f"
        />
        <Icon url="https://qiita.com/casek0607" reactIcon={<SiQiita />} color="rgb(59 3 3 / 92%)" />
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
