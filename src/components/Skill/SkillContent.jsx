import React from 'react';

import styled from 'styled-components';

const SkillBox = styled.div`
  border-radius: 2rem;
  margin: 2rem 2rem 0;
  padding: 1.5rem 2rem;
  position: relative;
  .name {
    transform: rotate(-3deg);
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-weight: bold;
  }
  .contents {
    margin-top: 1.3rem;
    line-height: 150%;
    &__content {
      line-height: 1.6rem;
    }
  }
`;
const SkillContent = ({ skill }) => {
  return (
    <SkillBox>
      <div className='name'>{skill.title}</div>
      <div className='contents'>
        {skill.contents.map((content, idx) => (
          <div key={idx.toString()} className='contents__content'>
            {content}
          </div>
        ))}
      </div>
    </SkillBox>
  );
};

export default SkillContent;
