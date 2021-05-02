import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import profileImage from '../src/assets/my-profile-image.jpg';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import ReactWordcloud, { MinMaxPair } from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { skills } from './skills';
import { isMobile } from 'react-device-detect';
const wordCloudSize: MinMaxPair = isMobile ? [300, 200] : [600, 450];
const wordCloudFontSize: MinMaxPair = isMobile ? [15, 40] : [20, 60];

interface IIconProps {
  url: string;
  reactIcon: object;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="is-size-4">Profile webite - coming soon</h2>
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

        <h1 className="is-size-2">Highlight</h1>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=CFBeNRFlvdM"
          width="800px"
          height="450px"
          style={{ height: 'auto', maxWidth: '100%' }}
        />
        <h1 className="is-size-2" style={{ marginTop: '10px' }}>
          Technical Skills
        </h1>
        <div className="columns is-mobile is-centered" style={{ margin: '10px' }}>
          <div
            className="has-background-white-bis"
            style={{ background: 'has-background-white-bis', borderRadius: '5%' }}
          >
            <ReactWordcloud
              options={{
                fontFamily: 'courier new',
                fontSizes: wordCloudFontSize,
                rotations: 0
              }}
              size={wordCloudSize}
              words={skills}
            />
          </div>
        </div>
        <br />
        <br />
      </header>
    </div>
  );
}

function Icon({ url, reactIcon }: IIconProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer" style={{ paddingRight: '20px', color: '#ec7309' }}>
      {reactIcon}
    </a>
  );
}

export default App;
