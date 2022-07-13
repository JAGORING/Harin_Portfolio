import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkDiv = styled(Link)`
  text-decoration: none;
  margin-right: 2em;
  font-weight: bold;
  font-size: 1.5em;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:last-child {
    margin-right: 0em;
  }
  letter-spacing: 0.16em;
  color: ${(props) => (props.theme === 'light' ? '#222831' : '#EEEEEE')};
  background: linear-gradient(
    to right,
    ${(props) => (props.theme === 'light' ? '#222831' : '#EEEEEE')} 0%,
    ${(props) => (props.theme === 'light' ? '#222831' : '#EEEEEE')} 100%
  );
  background-repeat: no-repeat;
  background-position: left 100%;
  transition-duration: 0.3s;
  background-size: 0 6%;
  &:hover {
    background-size: 100% 6%;
  }
`;
const LinkList = ({ item, theme }) => {
  return (
    <LinkDiv to={item.to} theme={theme}>
      {item.label}
    </LinkDiv>
  );
};

export default LinkList;
