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
  font-size: 35px;
  font-weight: bold;
  width: 100%;
  display: block;
  ${media.small`
    font-size: 30px;
  `};
`;

const Flip = styled.div`
  margin-top: 0;
  height: 60px;
  overflow: hidden;
  & > div > div {
    color: #fff;
    padding: 2px 12px;
    height: 60px;
    margin-bottom: 40px;
    display: inline-block;
    ${media.small`
      font-size: 30px;
    `};
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
