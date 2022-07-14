import React from 'react';

import styled from 'styled-components';

const PointBox = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(n + 2) {
    margin-left: 1rem;
  }
  .image {
    width: 80px;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0;
  }
  p {
    color: ${(props) => !props.theme.shadowColor};
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
