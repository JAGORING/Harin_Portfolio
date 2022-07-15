import { TbListDetails, TbGrowth, TbSettings } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';

export const AboutItems = [
  { to: '/about/info', label: 'ABOUT ME' },
  { to: '/about/skills', label: 'SKILLS' },
  { to: '/about/QnA', label: 'Q&A' },
];

export const point = [
  {
    icon_name: <TbListDetails className='icon' />,
    title: '디테일',
    content: '최고의 사용자 경험을 위해 사소한 디테일까지 신경쓰기',
  },
  {
    icon_name: <TbSettings className='icon' />,
    title: '유지보수',
    content: '수정하기 쉽고 재사용하기 좋은 코드를 짜는 것을 목표로!',
  },
  {
    icon_name: <FaUserFriends className='icon' />,
    title: '동료',
    content: '신뢰할 수 있는 동료가 되어 더 좋은 방향으로 함께 나아가기',
  },
  {
    icon_name: <TbGrowth className='icon' />,
    title: '성장',
    content: '스스로 문제를 정의하고 해결하는 과정을 통한 끊임없는 성장',
  },
];

export const skills = [
  { good: true, label: 'HTML/CSS' },
  { good: true, label: 'JavaScript' },
  { good: true, label: 'React' },
  { good: false, label: 'Firebase' },
  { good: true, label: 'Git/GitHub' },
  { good: false, label: 'BootStrap' },
  { good: false, label: 'styled-components' },
  { good: false, label: 'MongoDB' },
];
export const skillContents = [
  {
    title: 'Javascript',
    contents: [
      'ES6+ 문법에 익숙합니다.',
      'webpack, parcel 등의 번들러 사용 경험이 있습니다.',
      '동적 디자인에 대한 이해도가 높습니다.',
      'axios, fetch을 사용한 통신 경험이 있습니다.',
      'Vanila JavaScript로 화면을 제어하고 기능을 구현할 수 있습니다.',
    ],
  },

  {
    title: 'HTML/CSS',
    contents: [
      '구조에 따라 적절한 시멘틱 태그를 선택하여 사용 할 수 있습니다.',
      'BEM 방법론을 적용할 수 있습니다.',
      'Antd, Material-UI, Bootstrap등의 css 라이브러리를 사용할 수 있습니다.',
      'keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.',
      'CSS3 속성을 이해하고 시안에 따라 적절한 레이아웃을 구현할 수 있습니다',
    ],
  },

  {
    title: 'React',
    contents: [
      '컴포넌트를 이용해서 재사용 가능하게 구현할 수 있습니다.',
      'JSX 문법을 이용해서 간결하고 알아보기 쉬운 코드를 짤 수 있습니다.',
      'SPA를 구현하기 위해 react-router-dom을 사용할 수 있습니다.',
    ],
  },
  {
    title: 'Git/GitHub',
    contents: [
      'branch를 사용하여 분기점을 만들 수 있습니다.',
      'pull-request를 이용하여 코드리뷰를 주고받은 경험이 있습니다.',
    ],
  },
];

export const questionsAnswers = [
  {
    id: 'q1',
    question: '자신에 대해 자유롭게 표현한다면?',
    answer: '이러쿵 저러쿵 저러쿵 이러쿵',
  },
  {
    id: 'q2',
    question: '프론트엔드에 흥미를 가지게 된 계기가 있나요?',
    answer: '이러쿵 저러쿵 저러쿵 이러쿵',
  },
  {
    id: 'q3',
    question:
      '프론트엔드 개발의 기술을 향상시키기 위한 본인의 학습 방법에 대해서 얘기해주세요!',
    answer: '이러쿵 저러쿵 저러쿵 이러쿵',
  },
  {
    id: 'q4',
    question: '개발에 있어서 제일 중요하다고 생각하는 점이 있나요?',
    answer: '이러쿵 저러쿵 저러쿵 이러쿵',
  },
  {
    id: 'q5',
    question: '어떤 개발자가 되고 싶나요?',
    answer: '이러쿵 저러쿵 저러쿵 이러쿵',
  },
];

export const projectItems = [
  {
    id: 'p1',
    img: 'https://picsum.photos/id/54/400/300',
    title: '첫번째 프로젝트',
    language: 'React',
    content: '이렇게 저렇게 만들어 본 요런 프로젝트',
  },
  {
    id: 'p2',
    img: 'https://picsum.photos/id/54/400/300',
    title: '두번째 프로젝트',
    language: 'HTML/CSS, JavaScript',
    content: '이렇게 저렇게 만들어 본 요런 프로젝트',
  },
  {
    id: 'p3',
    img: 'https://picsum.photos/id/54/400/300',
    title: '세번째 프로젝트',
    language: 'React',
    content: '이렇게 저렇게 만들어 본 요런 프로젝트',
  },
  {
    id: 'p4',
    img: 'https://picsum.photos/id/54/400/300',
    title: '네번째 프로젝트',
    language: 'React',
    content: '이렇게 저렇게 만들어 본 요런 프로젝트',
  },
  {
    id: 'p5',
    img: 'https://picsum.photos/id/54/400/300',
    title: '다섯번째 프로젝트',
    language: 'React',
    content: '이렇게 저렇게 만들어 본 요런 프로젝트',
  },
];
