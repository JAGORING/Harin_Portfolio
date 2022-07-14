import React from 'react';
import styled from 'styled-components';
import media from '../../theme/media';
const Text = styled.div`
  margin-top: 5rem;
  ${media.small`
  margin-top: 2rem;
  padding: 0 1.5rem;
  font-size: 0.7rem;

`};
  div:nth-child(1),
  div:nth-child(2) {
    font-weight: bold;
    font-size: 1.1em;
    color: #519999;
    ${media.small`
      font-size: 0.9rem;
    `};
  }
  div:nth-child(2) {
    margin-bottom: 2rem;
    ${media.small`
    margin-bottom: 0.6rem;
  `};
  }
`;
const EndText = () => {
  return (
    <Text>
      <div>{'개발자로서의 성장을 멈추지 않고, '}</div>
      <div>{'"왜?" 라는 질문으로 성장의 원동력을 가지겠습니다.'}</div>
      <div>{'사용자가 애정을 가질 수 있는 서비스를 만드는'}</div>
      <div>{'스스로 문제를 정의하고 해결하는'}</div>
      <div>{'FRONT-END 개발자가 되기 위해 노력하겠습니다.'}</div>
    </Text>
  );
};

export default EndText;
