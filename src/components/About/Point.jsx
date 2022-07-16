import React from 'react';

import styled from 'styled-components';
import media from '../../theme/media';

const PointBox = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    font-size: 2rem;
  }
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
    margin: 1rem 0;
    ${media.small`
    font-size: 0.9em;
  `};
  }
  p {
    text-align: center;
    color: ${(props) => !props.theme.shadowColor};
    ${media.small`
    font-size: 0.7em;
  `};
  }
`;

const Point = ({ point }) => {
  return (
    <PointBox>
      {point.icon_name}
      <h3>{point.title}</h3>
      <p>{point.content}</p>
    </PointBox>
  );
};

export default Point;
