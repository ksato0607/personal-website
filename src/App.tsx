import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import profileImage from '../src/assets/my-profile-image.jpg';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Profile webite - coming soon</h2>
        <img id="profile-image" src={profileImage} alt="profile" />
        <span style={{ fontSize: '36px' }}>Keisuke Sato</span>
        <span style={{ fontSize: '24px', width: '40%' }}>
          I'm a software engineer who has been interested in interactive projects which bring people, design and
          technology together. I worked on an interactive projection mapping for Zushi Art Festival in 2020 and I have
          been building a platform that connects creators together and takes their creativity into the next level.
        </span>
        <div id="icons" style={{ fontSize: '52px', paddingTop: '10px' }}>
          {/* <Icon url="https://github.com/ksato0607" icon={<FaGithub />} /> */}
          <a
            href="https://github.com/ksato0607"
            target="_blank"
            rel="noreferrer"
            style={{ paddingRight: '20px', color: '#ec7309' }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/channel/UCzosx8yNdW6qPyUoKp-VtAg/videos"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '20px', color: '#ec7309' }}
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/keisuke-sato/"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '20px', color: '#ec7309' }}
          >
            <FaLinkedin />
          </a>
        </div>

        <h1>Highlight</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=CFBeNRFlvdM" />
        <br />
      </header>
    </div>
  );
}

// function Icon({ url }: any) {
//   return (
//     <a href={url} target="_blank" rel="noreferrer" style={{ paddingRight: '20px', color: '#ec7309' }}>
//       <FaGithub />
//     </a>
//   );
// }

export default App;
