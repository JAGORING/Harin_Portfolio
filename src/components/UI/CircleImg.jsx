import React from 'react';

import styled from 'styled-components';
import RinImg from '../../images/Harin.jpg';

const Box = styled.div`
  width: 15em;
  height: 15em;
  border-radius: 70%;
  overflow: hidden;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CircleImg = () => {
  return (
    <Box>
      <Profile src={RinImg} />
    </Box>
  );
};

export default CircleImg;
