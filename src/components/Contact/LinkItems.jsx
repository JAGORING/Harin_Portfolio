import React from 'react';
import styled from 'styled-components';
import media from '../../theme/media';
import { SiGithub, SiNotion, SiInstagram } from 'react-icons/si';
import kakaoQr from '../../images/kakaoQr.png';

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: repeat(1fr, 1fr);
  grid-template-columns: repeat(1, 1fr);
  column-gap: 4rem;

  h3 {
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    dispay: inline-block;
    font-size: 0.8em;
    margin-bottom: 1rem;
    ${media.small`
    margin-bottom: 0.3rem;
    padding: 0 1.5rem; 
    font-size: 0.5em;

    `};
  }
  img {
    width: 10rem;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    ${media.small`
    padding: 1.5rem; 
    `};
  }
`;
const LinkUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.BaseColor};
    font-size: 1.8rem;
  }
  li {
    margin-left: 1.6rem;
  }
`;
const LinkItems = () => {
  return (
    <Container>
      <h3>아이콘을 누르면 연결된 링크로 이동합니다!</h3>
      <LinkUl>
        <li>
          <a href='https://www.instagram.com/rinhh_15'>
            <SiInstagram />
          </a>
        </li>
        <li>
          <a href='https://sunrise-soursop-181.notion.site/a53201019e064639bc0abeb11203e4d3'>
            <SiNotion />
          </a>
        </li>
        <li>
          <a href='https://github.com/Leeharin115'>
            <SiGithub />
          </a>
        </li>
      </LinkUl>
      <img src={kakaoQr} alt='카카오톡 오픈채팅 QR' />
    </Container>
  );
};

export default LinkItems;
