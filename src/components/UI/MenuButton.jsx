import React from 'react';

import styled from 'styled-components';

const FullButton = styled.button`
  background: #3d4c53;
  margin: 20px 0.3em;
  width: 180px;
  height: 50px;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  &:first-child {
    margin-left: 1em;
  }
`;
const BtnTwo = styled.div`
  position: relative;
  width: 180px;
  height: 100px;
  margin-top: -95px;
  padding-top: 3px;
  background: #26a69a;
  left: -250px;
  transition: 0.3s;
  ${FullButton}:hover & {
    left: -130px;
  }
`;
const BtnText = styled.p`
  color: white;
  transition: 0.3s;
  ${FullButton}:hover & {
    margin-left: 65px;
  }
`;
const BtnText2 = styled.p`
  margin-top: 63px;
  margin-right: -130px;
  color: #fff;
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
