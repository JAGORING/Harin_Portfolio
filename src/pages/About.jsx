import React from 'react';
import styled from 'styled-components';

import { point, AboutItems } from '../data';

import CircleImg from '../components/UI/CircleImg';
import AboutList from '../components/AboutList';
import Point from '../components/Point';
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
  padding: 4em 6em;
  border-radius: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap2 = styled(Wrap)`
  margin-top: 4em;
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
