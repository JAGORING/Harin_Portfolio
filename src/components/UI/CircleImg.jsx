import React from 'react';

import styled from 'styled-components';

const Box = styled.div`
  width: 15em;
  height: 15em;
  border-radius: 30%;
  overflow: hidden;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CircleImg = ({ image }) => {
  return (
    <Box>
      <Profile src={image} />
    </Box>
  );
};

export default CircleImg;
