import React, { useEffect } from 'react';

import Accordion from '../components/QnA/Accordion';
import { questionsAnswers } from '../data';
import BackToAbout from '../components/Button/BackToAbout';

const QnA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <BackToAbout />
      <Accordion qnas={questionsAnswers} />
    </section>
  );
};

export default QnA;
