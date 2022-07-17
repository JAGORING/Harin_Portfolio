import React, { useEffect } from 'react';

import styled from 'styled-components';

import BackToAbout from '../components/Button/BackToAbout';
import CircleImg from '../components/UI/CircleImg';
import RinImg from '../images/Harin2.jpg';
import media from '../theme/media';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.small`
    flex-direction: column;
`};
`;
const InfoBox = styled.div`
  margin-left: 6em;
  border: 0.3em solid ${(props) => props.theme.BaseColor};
  padding: 3em 4.5em;
  border-radius: 0.3em;

  a {
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  }

  ${media.medium`
  margin-left: 2rem;
  padding: 2.5em 3.2em;
  `};
  ${media.small`
  margin: 2rem 0 0;
  padding: 2em 2.3em;
  `};
`;
const InfoUl = styled.ul`
  width: 100%;
  li:not(:last-child) {
    margin-bottom: 0.3em;
  }

  li > span {
    font-weight: bold;

    &:after {
      content: ' : ';
    }
  }
`;

const InfoMe = styled.div`
  width: 60%;
  margin: 4em auto;
  display: flex;
  flex-direction: column;
  ${media.medium`
    width: 75%;
  `};
  ${media.small`
  margin: 2em auto;
    width: 80%;
  `};
  h3 {
    margin-bottom: 1.2rem;
  }
  p {
    line-height: 1.7rem;
    white-space: pre-line;
  }
`;
const Info = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <BackToAbout />
      <Wrap>
        <CircleImg image={RinImg} size='large' />
        <InfoBox>
          <InfoUl>
            <li>
              <span>BIRTHDAY</span>1999-01-15
            </li>
            <li>
              <span>PHONE</span>+82 10-6271-7947
            </li>
            <li>
              <span>UNIVERSITY </span>한세대학교 / 컴퓨터공학과
            </li>
            <li>
              <span>EMAIL</span>leeharin115@gmail.com
            </li>
            <li>
              <span>GitHub</span>
              <a href='https://github.com/Leeharin115'>
                https://github.com/Leeharin115
              </a>
            </li>
            <li>
              <span>Notion</span>
              <a href='https://sunrise-soursop-181.notion.site/HaRin-c0d9c2f9f3054e3b99bb910eb01327cf'>
                이력서 사이트로 이동!
              </a>
            </li>
          </InfoUl>
        </InfoBox>
      </Wrap>
      <InfoMe>
        <h3>성장을 위해 꾸준히 노력하는 개발자 이하린입니다🤗</h3>
        <p>
          프론트엔드 신입 개발자로 HTML/CSS, JavaScript, React의 실력을 키워가고
          있습니다. {'\n'}
          스스로의 성장 가능성을 항상 열어두고, 해결해야할 문제가 있을 때
          힘들어도 포기하지 않고 도전하는 개발자입니다. {'\n'}새로운 기술과
          트랜드를 익히려 노력하고 있습니다. {'\n'}팀에 있어서 대화와 피드백으로
          더 나은 방향으로 함께 갈 수 있는 동료가 되는 것을 목표로 하고
          있습니다. {'\n'}프로젝트를 진행하면서 깨달은 점을 Notion에 기록하는
          것을 습관화하고 있습니다.
        </p>
      </InfoMe>
    </section>
  );
};

export default Info;
