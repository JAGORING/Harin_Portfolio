import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './UI/Button';

const BackToAbout = () => {
  let history = useHistory();
  return <Button onClick={() => history.goBack()}>Back To About</Button>;
};

export default BackToAbout;
