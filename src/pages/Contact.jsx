import React from 'react';
import styled from 'styled-components';

import Email from '../components/Email';
import LinkItems from '../components/LinkItems';

const ContactRin = styled.div`
  padding: 0 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailContainer = styled.div``;
const LinkContainer = styled.div`
  margin-left: 1rem;
  width: 40rem;
`;

const Contact = () => {
  return (
    <>
      <ContactRin>
        <EmailContainer>
          <Email />
        </EmailContainer>
        <LinkContainer>
          <p>
            개발자로서의 성장을 멈추지 않고, "왜?" 라는 질문으로 성장의 원동력을
            가지겠습니다.
            <br />
            다양한 문제와 오류 상황에 적절하게 대처하고 해결하는, 함께 일하는
            동료가 신뢰할 수 있는 <span>이하린</span>이 되겠습니다!
          </p>

          <LinkItems />
        </LinkContainer>
      </ContactRin>
    </>
  );
};

export default Contact;
