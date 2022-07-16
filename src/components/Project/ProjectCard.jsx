import React from 'react';
import styled from 'styled-components';
import media from '../../theme/media';

import { SiNotion, SiGithub } from 'react-icons/si';

const Card = styled.div`
  background: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.shadowColor} 0px 5px 20px 0px;
  width: 20rem;
  height: 25rem;
  border-radius: 0.6em;
  margin-bottom: 1em;
  overflow: hidden;
  transition: transform ease 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }
`;
const CardBody = styled.div`
  padding: 1.2em;
  h2 {
    color: ${(props) => props.theme.textColor};
    margin-top: -0.2em;
    letter-spacing: 0.03em;
    font-size: 1.3em;
    ${media.small`
    font-size: 1.1rem;
    `};
  }
  h5 {
    font-weight: bold;
    font-size: 0.7em;
    letter-spacing: 0.04em;
    margin: 1.4em 0 0.8em;
    text-transform: uppercase;
    ${media.medium`
      margin: 0.6rem 0;
    `};
  }
  p {
    color: ${(props) => !props.theme.shadowColor};
    ${media.small`
      font-size: 0.8rem;
  `};
  }
`;
const BtnGroup = styled.div`
  float: right;
  margin: 0.3rem 0 0.6rem;
  position: absolute;
  bottom: 0%;
  right: 3%;
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
    font-size: 1.6rem;
    &:last-child {
      margin-left: 0.3em;
    }
    color: ${(props) => props.theme.textColor};
    ${media.small`
    font-size: 1.3rem;
`};
  }
`;

const ProjectCard = ({ item }) => {
  return (
    <Card>
      <div>
        <img src={item.img} alt={`${item.title}`} />
      </div>
      <CardBody>
        <h2>{item.title}</h2>
        <h5>{item.language}</h5>
        <p>{item.content}</p>
      </CardBody>
      <BtnGroup>
        <button>
          <a href={item.git}>
            <SiGithub className='icon' />
          </a>
        </button>
        <button>
          <a href={item.notion}>
            <SiNotion className='icon' />
          </a>
        </button>
      </BtnGroup>
    </Card>
  );
};

export default ProjectCard;
