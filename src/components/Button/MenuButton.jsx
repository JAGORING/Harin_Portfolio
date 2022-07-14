import React from 'react';

import styled from 'styled-components';
import media from '../../theme/media';
const FullButton = styled.button`
  background: #393e46;
  margin: 20px 0.3em;
  border: none;
  width: 10rem;
  height: 2.6rem;
  line-height: 2.6rem;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  &:first-child {
    margin-left: 1em;
  }
  ${media.medium`
  &:first-child {
    margin-left: 0.5em;
  }
  margin: 0.3rem 0.5em;


`};
  p {
    color: #eeeeee;
  }
`;
const BtnTwo = styled.div`
  position: relative;
  width: 180px;
  height: 120px;
  margin-top: -73px;
  padding-top: 5px;
  background: ${(props) => props.theme.BaseColor};
  left: -250px;
  transition: 0.3s;
  ${FullButton}:hover & {
    left: -130px;
  }
`;
const BtnText = styled.p`
  transition: 0.3s;
  ${FullButton}:hover & {
    margin-left: 65px;
  }
`;
const BtnText2 = styled.p`
  margin-top: 25px;
  margin-right: -130px;
`;
const MenuButton = ({ onClick, children }) => {
  return (
    <FullButton onClick={onClick}>
      <BtnText>{children}</BtnText>
      <BtnTwo>
        <BtnText2>GO!</BtnText2>
      </BtnTwo>
    </FullButton>
  );
};

export default MenuButton;
