import React from 'react';
import styled from 'styled-components';

const SkillBox = styled.li`
  background-color: ${(props) => (props.yellow ? '#F3C568' : '#D8D6D1')};
  padding: 0.5em 1.2em;
  margin: 0 0.8em 0.2em 0;
  border-radius: 8px;
  font-size: 1.1em;
`;

const SkillItem = ({ children, good }) => {
  return <SkillBox yellow={good}>{children}</SkillBox>;
};

export default SkillItem;
