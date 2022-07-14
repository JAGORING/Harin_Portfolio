import AccordionItem from './AccordionItem';
import styled from 'styled-components';
import media from '../../theme/media';

const FaqContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: start;
  h1 {
    margin: 0.2em 0;
    font-size: 2em;
  }
  padding-left: 1rem;
  ${media.small`
    width: 90%;
  `};
`;

const AccordionsContainer = styled.div`
  margin-top: 2em;
`;

const Accordion = ({ qnas }) => {
  const handleHeaderClick = (qna) => {
    const questions = Array.from(document.querySelectorAll('.questions'));
    const answers = Array.from(document.querySelectorAll('.answers'));

    answers.forEach((answer, index) => {
      const question = questions[index].querySelector('span');
      const icon = questions[index].querySelector('.icon');

      const isAnswerShown = answer.style.maxHeight;
      const isQuestionSelected = answer.id === qna.id;

      if (isAnswerShown || !isQuestionSelected) {
        answer.style.maxHeight = null;
        question.style.fontWeight = '400';
        icon.style.transform = '';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.style.fontWeight = 'bold';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  };

  return (
    <FaqContainer>
      <h1>QnA</h1>
      <AccordionsContainer>
        {qnas.map((item, index) => (
          <AccordionItem
            key={index}
            qna={item}
            onHeaderClick={handleHeaderClick}
          />
        ))}
      </AccordionsContainer>
    </FaqContainer>
  );
};

export default Accordion;
