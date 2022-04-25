import React, { useEffect, useState } from 'react';
import AboutMe from './components/AboutMe';
import Highlight from './components/Highlight';
import Skills from './components/Skills';
import './App.css';
import ReactGA from 'react-ga';

const trackingId = 'UA-208623119-1';
ReactGA.initialize(trackingId, {
  debug: false,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App" style={isLoaded ? {} : { display: 'none' }} onLoad={() => setIsLoaded(true)}>
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
