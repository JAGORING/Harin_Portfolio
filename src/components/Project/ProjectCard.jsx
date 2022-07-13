import React from 'react';
import styled from 'styled-components';

import { SiNotion, SiGithub } from 'react-icons/si';

const Card = styled.div`
  background: ${(props) => (props.theme === 'light' ? '#EEEEEE' : '#222831')};
  box-shadow: ${(props) => (props.theme === 'light' ? '#c8c8c8' : '#393E46')}
    0px 5px 20px 0px;
  width: 80%;
  border-radius: 0.6em;
  margin-bottom: 1em;
  overflow: hidden;
  transition: transform ease 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const CardBody = styled.div`
  padding: 1.2em;
  h2 {
    color: ${(props) => (props.theme === 'light' ? '#222831' : '#EEEEEE')};
    margin-top: -0.2em;
    letter-spacing: 0.03em;
    font-size: 1.3em;
  }
  h5 {
    font-weight: bold;
    font-size: 0.7em;
    letter-spacing: 0.04em;
    margin: 1.4em 0 0 0;
    text-transform: uppercase;
  }
  p {
    color: ${(props) => (props.theme === 'light' ? '#393E46' : '#c8c8c8')};
  }
  .icon {
    font-size: 1.8rem;
    color: ${(props) => (props.theme === 'light' ? '#222831' : '#c8c8c8')};
  }
`;
const BtnGroup = styled.div`
  float: right;
  margin: 0.3rem 0 0.6rem;

  button {
    border: none;
    background: transparent;

    &:hover {
      cursor: pointer;
    }
    &:first-child {
      margin-right: 0.3em;
    }
  }
`;

const ProjectCard = ({ item, theme }) => {
  return (
    <Card theme={theme}>
      <img src={item.img} alt={`${item.title}`} />
      <CardBody theme={theme}>
        <h2>{item.title}</h2>
        <h5>{item.language}</h5>
        <p>{item.content}</p>
        <BtnGroup>
          <button>
            <SiGithub className='icon' />
          </button>
          <button>
            <SiNotion className='icon' />
          </button>
        </BtnGroup>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
