import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Highlight from './components/Highlight';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe />
        <Highlight />
        <Skills />
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
