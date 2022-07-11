import React from 'react';
import styled from 'styled-components';

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
  margin-top: 3em;
`;

const About = () => {
  const ListItems = [
    { id: 1, to: '/about/info', label: '자기소개' },
    { id: 2, to: '/about/skills', label: 'SKILLS' },
    { id: 3, to: '/about/QnA', label: 'Q&A' },
  ];
  return (
    <AboutRin>
      <Wrap>
        <CircleImg image={RinImg} />
        <LinkBox>
          {ListItems.map((item) => (
            <LinkList key={item.id} item={item} />
          ))}
        </LinkBox>
      </Wrap>
      <Wrap2>
        <Point>이런이런 저런저런 점</Point>
        <Point>이런이런 저런저런 점</Point>
        <Point>이런이런 저런저런 점</Point>
        <Point>이런이런 저런저런 점</Point>
      </Wrap2>
    </AboutRin>
  );
};

export default About;
