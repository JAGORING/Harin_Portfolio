import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeProvider';

const SkillBox = styled.li`
  background-color: ${(props) =>
    props.yellow
      ? props.theme === 'light'
        ? '#66BFBF'
        : '#F7A91A'
      : '#D8D6D1'};
  color: #222831;
  padding: 0.5em 1.2em;
  margin: 0 0.8em 0.2em 0;
  border-radius: 8px;
  font-size: 1.1em;
`;

const SkillItem = ({ children, good }) => {
  const ThemeMode = useTheme();

  return (
    <SkillBox yellow={good} theme={ThemeMode[0]}>
      {children}
    </SkillBox>
  );
};

export default SkillItem;
