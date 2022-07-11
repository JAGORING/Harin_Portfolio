import React from 'react';

import styled from 'styled-components';

const PointBox = styled.div`
  width: 23%;
  border: 3px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Point = ({ children }) => {
  return (
    <PointBox>
      {/* <img /> */}
      <p>{children}</p>
    </PointBox>
  );
};

export default Point;
