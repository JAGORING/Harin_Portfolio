import React from 'react';
import { skills, skillContents } from '../data';

import styled from 'styled-components';
import BackToAbout from '../components/Button/BackToAbout';
import SkillItem from '../components/Skill/SkillItem';
import SkillContent from '../components/Skill/SkillContent';

const Wrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0.2em 0;
    font-size: 2em;
  }
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const SkillContents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Skills = () => {
  return (
    <section>
      <BackToAbout />
      <Wrap>
        <h1>SKILLS</h1>
        <ul className='list'>
          {skills.map((skill, index) => (
            <SkillItem key={index} good={skill.good}>
              {skill.label}
            </SkillItem>
          ))}
        </ul>
        <SkillContents>
          {skillContents.map((skill, index) => (
            <SkillContent key={index} skill={skill} />
          ))}
        </SkillContents>
      </Wrap>
    </section>
  );
};

export default Skills;
