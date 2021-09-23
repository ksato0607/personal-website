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
        Software engineer specializes on data aggregation and also interested in interactive projects which bring
        people, design and technology together. Projects include interactive projection mapping for 2020 Zushi Art
        Festival and web application development to connect creators together to take their creativity into next level.
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
