import React from 'react';
import styled from 'styled-components';

const SkillBox = styled.div`
  width: 100%;
  padding: 1.3rem 2rem;
  border-radius: 2rem;
  margin: 1.6rem 2rem 0;
  position: relative;
  .name {
    transform: rotate(-5deg);
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  .contents {
    padding: 1.5rem 2rem;
    &__content {
      line-height: 1.6rem;
    }
    border-right: 1px dashed ${(props) => props.theme.textColor};
    border-bottom: 1px dashed ${(props) => props.theme.textColor};
    border-right-width: 50%;
    border-bottom-width: 50%;
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
