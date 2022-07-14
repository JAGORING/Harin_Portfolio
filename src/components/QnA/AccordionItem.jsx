import styled from 'styled-components';

import { AiFillCaretDown } from 'react-icons/ai';

const AccordionWrapper = styled.div`
  border-bottom: 1px solid grey;
  padding-top: 1rem;
`;

const AccordionHeading = styled.span`
  margin: 0;
  font-size: 1.1em;
`;

const AccordionMessage = styled.p`
  color: gray;
  line-height: 1.5;
  white-space: pre-line;
  margin: 0.5rem 0 0.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height ease-out 0.2s;
`;
const AccordionHeader = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};

  .icon {
    font-size: 1.3em; 
    transition: transform ease 0.3s;
  }

  transition: color ease 0.3s;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
  &:focus {
    outline: none;
    color: ${(props) => props.theme.hoverColor};
  }

  &{AccordionMessage} {
    color: ${(props) => !props.theme.shadowColor};

  }
`;

const AccordionItem = ({ qna, onHeaderClick }) => {
  return (
    <AccordionWrapper>
      <AccordionHeader
        className='questions'
        onClick={() => {
          onHeaderClick(qna);
        }}
      >
        <AccordionHeading>{qna.question}</AccordionHeading>
        <AiFillCaretDown className='icon' />
      </AccordionHeader>
      <AccordionMessage id={qna.id} className='answers'>
        {qna.answer}
      </AccordionMessage>
    </AccordionWrapper>
  );
};

export default AccordionItem;
