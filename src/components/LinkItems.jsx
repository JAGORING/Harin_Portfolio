import React from 'react';
import styled from 'styled-components';

import { SiGithub, SiNotion, SiInstagram } from 'react-icons/si';

const LinkUl = styled.ul`
  h3 {
    dispay: inline-block;
    font-size: 0.8em;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.BaseColor};
    font-size: 1.8rem;
  }
`;
const LinkItems = () => {
  return (
    <LinkUl>
      <h3>아이콘을 누르면 연결된 링크로 이동합니다!</h3>

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
  );
};

export default LinkItems;
