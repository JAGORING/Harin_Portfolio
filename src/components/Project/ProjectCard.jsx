import React from 'react';
import styled from 'styled-components';
import media from '../../theme/media';

import { SiNotion, SiGithub } from 'react-icons/si';

const Card = styled.div`
  background: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.shadowColor} 0px 5px 20px 0px;
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
  .icon {
    font-size: 1.6rem;
    color: ${(props) => props.theme.textColor};
    ${media.small`
    font-size: 1.3rem;
`};
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
