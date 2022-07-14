import React from 'react';
import styled from 'styled-components';
import media from '../theme/media';

import Email from '../components/Contact/Email';
import EndText from '../components/Contact/EndText';
import LinkItems from '../components/Contact/LinkItems';

const ContactRin = styled.div`
  padding: 0 13%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(1fr, 1fr);
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
  ${media.medium`
  grid-template-columns: repeat(1, 1fr);
  padding: 0 20%;

`};
  ${media.small`
padding: 0;

`};
`;

const EmailContainer = styled.div`
  grid-row: 1 / 3;
  ${media.small`
  padding: 2rem;
  
  `};
`;
const LinkContainer = styled.div``;

const Contact = () => {
  return (
    <>
      <ContactRin>
        <EmailContainer>
          <Email />
        </EmailContainer>
        <EndText />
        <LinkContainer>
          <LinkItems />
        </LinkContainer>
      </ContactRin>
    </>
  );
};

export default Contact;
