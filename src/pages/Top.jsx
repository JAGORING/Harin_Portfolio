import React from 'react';
import styled from 'styled-components';

import MainTitle from '../components/Top/MainTitle';
import MoreButton from '../components/Button/MoreButton';

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 6rem;
`;
const Top = ({ onScroll }) => {
  const onScrollHandler = () => {
    onScroll();
  };

  return (
    <>
      <Text>
        <MainTitle />
      </Text>

      <MoreButton type='button' onClick={() => onScrollHandler()}>
        알아보기
      </MoreButton>
    </>
  );
};

export default Top;
