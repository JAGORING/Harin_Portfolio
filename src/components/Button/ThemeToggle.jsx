import React from 'react';
import styled from 'styled-components';

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      {mode === 'dark' ? '🌚' : '🌝'}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 4%;
  right: 2%;

  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.borderColor};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 48px;
  border-radius: 30px;
  box-shadow: 0px 2px 8px ${(props) => props.theme.shadowColor},
    0px 1px 4px ${(props) => props.theme.shadowColor};
`;
