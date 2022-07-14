import React from 'react';

import styled from 'styled-components';
import media from '../theme/media';
const PointBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(n + 2) {
    margin-left: 1rem;
    ${media.small`
    margin-left: 0;

  `};
  }
  .image {
    width: 80px;
    margin-bottom: 1rem;
    ${media.small`
    margin-bottom: 0.5rem;

  `};
  }

  h3 {
    margin: 0;
    ${media.small`
    font-size: 0.8em;
  `};
  }
  p {
    color: ${(props) => !props.theme.shadowColor};
    ${media.small`
    font-size: 0.6em;
  `};
  }
`;
const Point = ({ point, image }) => {
  return (
    <PointBox>
      <img className='image' src={image} alt='중요한 점 아이콘' />
      <h3>{point.title}</h3>
      <p>{point.content}</p>
    </PointBox>
  );
};

export default Point;
