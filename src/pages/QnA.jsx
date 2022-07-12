import React from 'react';

import Accordion from '../components/Accordion';
import { questionsAnswers } from '../data';
import BackToAbout from '../components/BackToAbout';

const QnA = () => {
  return (
    <section>
      <BackToAbout />
      <Accordion qnas={questionsAnswers} />
    </section>
  );
};

export default QnA;
