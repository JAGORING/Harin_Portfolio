import React from 'react';
import styled from 'styled-components';

import { SiNotion, SiGithub } from 'react-icons/si';

const Card = styled.div`
  background: #fff;
  width: 80%;
  border-radius: 0.6em;
  margin-bottom: 1em;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const CardBody = styled.div`
  padding: 1.2em;
  h2 {
    color: #222;
    margin-top: -0.2em;
    line-height: 1.4;
    font-size: 1.3em;
    font-weight: 500;
    transition: all ease-in 100ms;
  }
  p {
    color: #777;
  }
  h5 {
    color: #bbb;
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 0.04em;
    margin: 1.4em 0 0 0;
    text-transform: uppercase;
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
  .icon {
    font-size: 1.8rem;
  }
`;

const ProjectCard = ({ item }) => {
  return (
    <Card>
      <img src={item.img} alt={`${item.title}`} />
      <CardBody>
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
