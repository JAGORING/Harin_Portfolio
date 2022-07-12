import styled from 'styled-components';

import { AiFillCaretDown } from 'react-icons/ai';

const AccordionWrapper = styled.div`
  border-bottom: 1px solid grey;
  padding-top: 1rem;
  * {
    font-size: 18px;
  }
`;

const AccordionHeader = styled.button`
  font-family: inherit;
  cursor: pointer;

  border: none;
  background: none;
  padding: 0;
  margin: 0;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
  }
  .icon {
    transition: transform ease 0.3s;
  }

  color: black;
  transition: color ease 0.1s;

  &:hover {
    color: red;
  }
  &:focus {
    outline: none;
    color: red;
  }
`;

const AccordionHeading = styled.span`
  margin: 0 0 0.6em;
`;

const AccordionMessage = styled.p`
  color: gray;
  line-height: 1.5;
  white-space: pre-line;
  margin: 8px 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height ease-out 0.2s;
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
