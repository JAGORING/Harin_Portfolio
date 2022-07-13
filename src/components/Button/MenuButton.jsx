import React from 'react';

import { useTheme } from '../../context/themeProvider';
import styled from 'styled-components';

const FullButton = styled.button`
  background: ${(props) => (props.theme === 'light' ? '#393E46' : '#393E46')};
  margin: 20px 0.3em;
  border: none;
  width: 10rem;
  height: 2.6rem;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  &:first-child {
    margin-left: 1em;
  }

  p {
    color: #eeeeee;
  }
`;
const BtnTwo = styled.div`
  position: relative;
  width: 180px;
  height: 100px;
  margin-top: -95px;
  padding-top: 3px;
  background: ${(props) => (props.theme === 'light' ? '#66BFBF' : '#F7A91A')};
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
  margin-top: 63px;
  margin-right: -130px;
`;
const MenuButton = ({ onClick, children }) => {
  const ThemeMode = useTheme();

  return (
    <FullButton theme={ThemeMode[0]} onClick={onClick}>
      <BtnText>{children}</BtnText>
      <BtnTwo theme={ThemeMode[0]}>
        <BtnText2>GO!</BtnText2>
      </BtnTwo>
    </FullButton>
  );
};

export default MenuButton;
