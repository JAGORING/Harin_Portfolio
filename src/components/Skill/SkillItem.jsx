import React from 'react';
import styled from 'styled-components';
import media from '../../theme/media';

const SkillBox = styled.li`
  background-color: ${(props) =>
    props.yellow ? props.theme.BaseColor : '#D8D6D1'};
  color: #222831;
  padding: 0.5em 1.2em;
  margin: 0 0.8em 0.2em 0;
  border-radius: 8px;
  font-size: 1.1em;

  ${media.medium`
    font-size: 0.9rem;
  `};
`;

const SkillItem = ({ children, good }) => {
  return <SkillBox yellow={good}>{children}</SkillBox>;
};

export default SkillItem;
