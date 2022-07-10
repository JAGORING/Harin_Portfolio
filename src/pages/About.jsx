import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import CircleImg from '../components/UI/CircleImg';

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <>
      <div>this is About page</div>
      <AboutDiv>
        <CircleImg />
        <ul>
          <li>
            <Link to='/about/info'>자기소개</Link>
          </li>
          <li>
            <Link to='/about/skills'>SKILLS</Link>
          </li>
          <li>
            <Link to='/about/QnA'>Q&A</Link>
          </li>
        </ul>
      </AboutDiv>
    </>
  );
};

export default About;
