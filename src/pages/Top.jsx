import React from 'react';

import Weather from '../components/Weather';
import MoreButton from '../components/UI/MoreButton';

const Top = ({ onScroll }) => {
  const onScrollHandler = () => {
    onScroll();
  };

  return (
    <Weather>
      <h1>안녕하세요 저는 이하린입니다</h1>
      <h3>FRONT-END developer</h3>
      <MoreButton type='button' onClick={() => onScrollHandler()}>
        알아보기
      </MoreButton>
    </Weather>
  );
};

export default Top;
