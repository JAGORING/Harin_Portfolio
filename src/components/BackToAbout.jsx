import React from 'react';
import { useHistory } from 'react-router-dom';

import MenuButton from './UI/MenuButton';

const BackToAbout = () => {
  let history = useHistory();
  return (
    <MenuButton onClick={() => history.goBack()}>Back To About</MenuButton>
  );
};

export default BackToAbout;
