import React from 'react';
import styled from 'styled-components';

import { point, ListItems } from '../data';

import CircleImg from '../components/UI/CircleImg';
import LinkList from '../components/LinkList';
import Point from '../components/Point';
import RinImg from '../images/Harin.jpg';

const AboutRin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const LinkBox = styled.div`
  margin-left: 6em;
  position: relative;
  border: 0.3em solid
    ${(props) => (props.theme === 'light' ? '#66BFBF' : '#F7A91A')};
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
  width: 80%;
  margin-top: 4em;
`;

const About = ({ theme }) => {
  return (
    <AboutRin>
      <Wrap>
        <CircleImg image={RinImg} />
        <LinkBox theme={theme}>
          {ListItems.map((item, index) => (
            <LinkList key={index} item={item} theme={theme} />
          ))}
        </LinkBox>
      </Wrap>
      <Wrap2>
        {point.map((item, index) => (
          <Point key={index} image={RinImg} point={item} theme={theme} />
        ))}
      </Wrap2>
    </AboutRin>
  );
};

export default About;
