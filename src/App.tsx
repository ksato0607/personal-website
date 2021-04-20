import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import profileImage from '../src/assets/my-profile-image.jpg';

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
        <h1>Highlight</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=CFBeNRFlvdM" />
        <br />
      </header>
    </div>
  );
}

export default App;
