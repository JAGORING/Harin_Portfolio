import React from 'react';

import styled from 'styled-components';
import { AiOutlineRight, AiOutlineArrowDown } from 'react-icons/ai';

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullButton = styled.button`
  border: 0;
  position: relative;
  min-width: 16em;
  min-height: 4.5em;
  border-radius: 4.5em;
  color: #fff;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4.5em;
    z-index: 1;
    transition: transform 0.5s ease;
    background: blue;
  }

  &:hover {
    &:after {
      transform: translateX(65%);
    }
  }
`;
const Icon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.5s ease, opacity 0.25s ease;

  .icon {
    font-size: 2em;
  }
`;

const Icon1 = styled(Icon)`
  transform: translateX(-200%);
  opacity: 0;

  ${FullButton}:hover & {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Icon2 = styled(Icon)`
  .icon {
    margin-left: 0.5em;
  }
  ${FullButton}:hover & {
    transform: translateX(200%);
    opacity: 0;
  }
`;

const IconContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 15%;
  height: 2em;
  margin-left: 2.5em;
  transition: transform 0.5s ease;

  ${FullButton}:hover & {
    transform: translateX(125%);
  }
`;
const Text = styled.span`
  position: relative;
  z-index: 2;
`;

const MoreButton = ({ onClick, children }) => {
  return (
    <BtnContainer>
      <FullButton onClick={onClick}>
        <Text>{children}</Text>
        <IconContainer>
          <Icon1>
            <AiOutlineArrowDown className='icon' />
          </Icon1>
          <Icon2>
            <AiOutlineRight className='icon' />
          </Icon2>
        </IconContainer>
      </FullButton>
    </BtnContainer>
  );
};

export default MoreButton;
