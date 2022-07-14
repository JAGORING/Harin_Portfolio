import React from 'react';
import { skills, skillContents } from '../data';
import media from '../theme/media';
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
    margin: 0 0 0.4em;
    font-size: 2em;
  }
  .list {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(8, 1fr);
    place-items: center;
    margin-bottom: 1.2rem;
    ${media.medium`
    margin-top: 2rem;
    grid-template-columns: repeat(4, 1fr);
  `};
    ${media.small`
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
  `};
  }
`;

const SkillContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

${media.small`
margin-top: 2rem;
grid-template-columns: repeat(1, 1fr);
`};
}
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
