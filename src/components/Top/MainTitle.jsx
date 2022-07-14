import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../../theme/media';

const show = keyframes`
0% {margin-top:-270px;}
5% {margin-top:-180px;}
33% {margin-top:-180px;}
38% {margin-top:-90px;}
66% {margin-top:-90px;}
71% {margin-top:0px;}
99.99% {margin-top:0px;}
100% {margin-top:-270px;}
}
`;
const MainText = styled.div`
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: bold;
  display: block;
  ${media.small`
  font-size: 2em;

  `};
`;

const Flip = styled.div`
  height: 60px;
  overflow: hidden;
  & > div > div {
    color: #fff;
    padding: 0.09em 0.7em;
    height: 60px;
    margin-bottom: 43px;
    display: inline-block;
  }
  div:first-child {
    animation: ${show} 5s linear infinite;
  }
  div div {
    background: #42c58a;
  }
  div:first-child div {
    background: #dc143c;
  }
  div:last-child div {
    background: #4ec7f3;
  }
`;
const MainTitle = () => {
  return (
    <MainText>
      안녕하세요
      <Flip>
        <div>
          <div>신입 개발자</div>
        </div>
        <div>
          <div>프론트엔드 개발자</div>
        </div>
        <div>
          <div>이하린</div>
        </div>
      </Flip>
      입니다🤗
    </MainText>
  );
};

export default MainTitle;
