import React from 'react';

import styled from 'styled-components';
import media from '../../theme/media';
const Box = styled.div`
  width: ${(props) => (props.size === 'large' ? '18em' : '13em')};
  height: ${(props) => (props.size === 'large' ? '16em' : '13em')};
  border-radius: 30%;
  overflow: hidden;
  ${media.medium`
  width: ${(props) => (props.size === 'large' ? '16em' : '11rem')};
  height: ${(props) => (props.size === 'large' ? '16em' : '11rem')};

`};
  ${media.small`
width: ${(props) => (props.size === 'large' ? '16em' : '10rem')};
height: ${(props) => (props.size === 'large' ? '16em' : '10rem')};

`};
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CircleImg = ({ image, size }) => {
  return (
    <Box size={size}>
      <Profile src={image} />
    </Box>
  );
};

export default CircleImg;
