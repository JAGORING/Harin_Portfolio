import React from 'react';

import styled from 'styled-components';

import BackToAbout from '../components/Button/BackToAbout';
import CircleImg from '../components/UI/CircleImg';
import RinImg from '../images/Harin2.jpg';
import media from '../theme/media';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.small`
    flex-direction: column;
`};
`;
const InfoBox = styled.div`
  margin-left: 6em;
  border: 0.3em solid ${(props) => props.theme.BaseColor};
  padding: 3em 4.5em;
  border-radius: 0.3em;

  a {
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  }

  ${media.medium`
  margin-left: 2rem;
  padding: 2.5em 3.2em;
  `};
  ${media.small`
  margin: 2rem 0 0;
  padding: 2em 2.3em;
  `};
`;
const InfoUl = styled.ul`
  width: 100%;
  li:not(:last-child) {
    margin-bottom: 0.3em;
  }

  li > span {
    font-weight: bold;

    &:after {
      content: ' : ';
    }
  }
`;

const InfoMe = styled.div`
  width: 60%;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  ${media.medium`
  width: 70%;

  `};
  ${media.small`
  width: 85%;
  `};
`;
const Info = () => {
  return (
    <section>
      <BackToAbout />
      <Wrap>
        <CircleImg image={RinImg} size='large' />
        <InfoBox>
          <InfoUl>
            <li>
              <span>BIRTHDAY</span>1999-01-15
            </li>
            <li>
              <span>PHONE</span>+82 10-6271-7947
            </li>
            <li>
              <span>UNIVERSITY </span>한세대학교 / 컴퓨터공학과
            </li>
            <li>
              <span>EMAIL</span>leeharin115@gmail.com
            </li>
            <li>
              <span>GitHub</span>
              <a href='https://github.com/Leeharin115'>
                https://github.com/Leeharin115
              </a>
            </li>
          </InfoUl>
        </InfoBox>
      </Wrap>
      <InfoMe>
        <h3>꾸준히 성장을 위해 노력하는 개발자 이하린입니다🤗</h3>
        <p>
          대학교 졸업 후 진로에 대한 고민을 하던 중 '내가 좋아하고 흥미를 가지는
          일'을 하고 싶다는 생각이 들었습니다.
        </p>
      </InfoMe>
    </section>
  );
};

export default Info;
