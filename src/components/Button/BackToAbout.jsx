import React from 'react';
import { useHistory } from 'react-router-dom';

import MenuButton from './MenuButton';

const BackToAbout = () => {
  let history = useHistory();
  return <MenuButton onClick={() => history.goBack()}>Back</MenuButton>;
};

export default BackToAbout;
