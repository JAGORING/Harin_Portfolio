import React from 'react';
import styled, { keyframes } from 'styled-components';

const coverleft = keyframes`
0% {
  transform: scaleX(1) skewX(30deg);
  transform-origin: left;
}
100% {
  transform: scaleX(0) skewX(30deg);
  transform-origin: left;
}
`;

const CoverWrap = styled.div`
  background: #1b1b1b;
  z-index: 9999999;
  position: fixed;
  top: 0%;
  left: -25%;
  width: 150%;
  height: 100%;
  transform-origin: left;
  animation: ${coverleft} 1.6s both cubic-bezier(0.77, 0, 0.175, 1);
`;
const Cover = () => {
  return <CoverWrap></CoverWrap>;
};

export default Cover;
