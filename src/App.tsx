import React from "react";
import "./App.css";
import profileImage from "../src/assets/my-profile-image.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="profile-image" src={profileImage} alt="profile" />
        <span>Profile webite - coming soon</span>
      </header>
    </div>
  );
}

export default App;
