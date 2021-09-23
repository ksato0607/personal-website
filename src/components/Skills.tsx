import React from 'react';
import ReactWordcloud, { MinMaxPair } from 'react-wordcloud';
import { mySkills } from '../mySkillList';
import { isMobile } from 'react-device-detect';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
const wordCloudSize: MinMaxPair = isMobile ? [300, 200] : [600, 450];
const wordCloudFontSize: MinMaxPair = isMobile ? [15, 40] : [20, 60];

function Skills() {
  return (
    <React.Fragment>
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
            words={mySkills}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
