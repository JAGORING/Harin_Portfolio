import React from 'react';
import styled from 'styled-components';

import { point, AboutItems } from '../data';
import media from '../theme/media';
import CircleImg from '../components/UI/CircleImg';
import AboutList from '../components/About/AboutList';
import Point from '../components/About/Point';
import RinImg from '../images/Harin.jpg';

const AboutRin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutBox = styled.div`
  margin-left: 6em;
  position: relative;
  border: 0.3em solid ${(props) => props.theme.BaseColor};
  padding: 3.6em 6em;
  border-radius: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.small`
  padding: 1em 1.2em;
  margin: 1.5rem 0 0;
  font-size: 0.5rem;

`};
  ${media.medium`
  padding: 3em 3em;
  font-size: 0.8rem;
  text-align:center;
`};
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.small`
  flex-direction: column;
`};
`;
const Wrap2 = styled.div`
  width: 80%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  ${media.small`
  margin-top: 2rem;
  grid-template-columns: repeat(2, 1fr);
`};
`;

const About = () => {
  return (
    <AboutRin>
      <Wrap>
        <CircleImg image={RinImg} />
        <AboutBox>
          {AboutItems.map((item, index) => (
            <AboutList key={index} item={item} />
          ))}
        </AboutBox>
      </Wrap>
      <Wrap2>
        {point.map((item, index) => (
          <Point key={index} image={RinImg} point={item} />
        ))}
      </Wrap2>
    </AboutRin>
  );
};

export default About;
