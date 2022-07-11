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
  color: #363636;
  background: linear-gradient(to right, #363636 0%, #363636 100%);
  background-repeat: no-repeat;
  background-position: left 100%;
  transition-duration: 1s;
  background-size: 0 6%;
  &:hover {
    background-size: 100% 6%;
  }
`;
const LinkList = ({ item }) => {
  return <LinkDiv to={item.to}>{item.label}</LinkDiv>;
};

export default LinkList;
