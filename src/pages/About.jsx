import React from 'react';
import styled from 'styled-components';

import { point, ListItems } from '../data';

import CircleImg from '../components/UI/CircleImg';
import LinkList from '../components/LinkList';
import Point from '../components/Point';
import RinImg from '../images/Harin.jpg';

const AboutRin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const LinkBox = styled.div`
  margin-left: 6em;
  position: relative;
  border: 0.5em solid #133e96;
  padding: 4em 6em;
  border-radius: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 46px solid transparent;
    border-right-color: #133e96;
    border-left: 0;
    border-top: 0;
    margin-top: -23px;
    margin-left: -46px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap2 = styled(Wrap)`
  width: 80%;
  margin-top: 4em;
`;

const About = () => {
  return (
    <AboutRin>
      <Wrap>
        <CircleImg image={RinImg} />
        <LinkBox>
          {ListItems.map((item, index) => (
            <LinkList key={index} item={item} />
          ))}
        </LinkBox>
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
