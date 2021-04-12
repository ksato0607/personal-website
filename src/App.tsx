import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import profileImage from '../src/assets/my-profile-image.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="profile-image" src={profileImage} alt="profile" />
        <span>Profile webite - coming soon</span>
        <h1>Highlight</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=CFBeNRFlvdM" />
      </header>
    </div>
  );
}

export default App;
