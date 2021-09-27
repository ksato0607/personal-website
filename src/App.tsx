import React from 'react';
import AboutMe from './components/AboutMe';
import Highlight from './components/Highlight';
import Skills from './components/Skills';
import './App.css';

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
