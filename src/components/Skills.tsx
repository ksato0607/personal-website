import React from 'react';
import ReactWordcloud, { MinMaxPair } from 'react-wordcloud';
import { mySkills, ISkill } from '../mySkillList';
import { isMobile } from 'react-device-detect';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
const wordCloudSize: MinMaxPair = isMobile ? [300, 200] : [600, 450];
const wordCloudFontSize: MinMaxPair = isMobile ? [15, 40] : [20, 60];

function Skills() {
  return (
    <React.Fragment>
      <span className="is-size-2 m-4">Technical Skills</span>
      <div className="columns is-mobile is-centered">
        <div className="has-background-white-bis" style={{ borderRadius: '5%' }}>
          <ReactWordcloud
            options={{
              fontFamily: 'courier new',
              fontSizes: wordCloudFontSize,
              rotations: 0
            }}
            callbacks={{ getWordTooltip: (word: ISkill) => `${word.text} - ${word.description}` }}
            size={wordCloudSize}
            words={mySkills}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
