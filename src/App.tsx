import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import ReactWordcloud, { MinMaxPair } from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { skills } from './skills';
import { isMobile } from 'react-device-detect';
import AboutMe from './AboutMe';
const wordCloudSize: MinMaxPair = isMobile ? [300, 200] : [600, 450];
const wordCloudFontSize: MinMaxPair = isMobile ? [15, 40] : [20, 60];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe />
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

export default App;
