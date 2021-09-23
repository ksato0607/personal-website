import React from 'react';
import Icon from './Icon';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../src/assets/my-profile-image.jpg';

function AboutMe() {
  return (
    <React.Fragment>
      <img id="profile-image" src={profileImage} alt="profile" />
      <span className="is-size-2">Keisuke Sato</span>
      <span className="is-size-3 container is-size-6-mobile is-max-desktop" style={{ margin: '10px' }}>
        I'm a software engineer who has been interested in interactive projects which bring people, design and
        technology together. I worked on an interactive projection mapping for Zushi Art Festival in 2020 and I have
        been building a platform that connects creators together and takes their creativity into the next level.
      </span>
      <div id="icons" style={{ fontSize: '52px', paddingTop: '10px' }}>
        <Icon url="https://github.com/ksato0607" reactIcon={<FaGithub />} />
        <Icon url="https://www.youtube.com/channel/UCzosx8yNdW6qPyUoKp-VtAg/videos" reactIcon={<FaYoutube />} />
        <Icon url="https://www.linkedin.com/in/keisuke-sato/" reactIcon={<FaLinkedin />} />
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
