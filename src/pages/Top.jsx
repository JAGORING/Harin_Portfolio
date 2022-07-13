import React from 'react';

import Weather from '../components/Weather';
import MoreButton from '../components/Button/MoreButton';

const Top = ({ onScroll, theme }) => {
  const onScrollHandler = () => {
    onScroll();
  };

  return (
    <Weather>
      <h1>이하린입니다</h1>
      <h3>
        사용자가 애정을 가질 수 있는 서비스를 만드는, 스스로 문제를 정의하고
        해결하는, FRONT-END 개발자가 되기 위해 노력하고 있습니다.
      </h3>
      <MoreButton theme={theme} type='button' onClick={() => onScrollHandler()}>
        알아보기
      </MoreButton>
    </Weather>
  );
};

export default Top;
