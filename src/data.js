import { TbListDetails, TbGrowth, TbSettings } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';
import project_portfolio from './images/project_port.jpg';
import project_rintube from './images/project_rintube.png';
import project_carrot from './images/project_carrot.png';
import project_game from './images/project_game.jpg';

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
    img: project_carrot,
    title: '당근 게임',
    language: 'HTML/CSS, JavaScript',
    content:
      'DreamCoding의 브라우저101 강의를 참고해서 만든 게임 프로젝트입니다.곤충을 피해서 모든 당근을 클릭해서 모두 없애는 방식으로 진행됩니다.',
    git: 'https://github.com/Leeharin115/carrotGame',
    notion:
      'https://sunrise-soursop-181.notion.site/Carrot-Game-f990d756854e4a9aaa2adfe9e92e23c6',
  },
  {
    id: 'p2',
    img: project_rintube,
    title: 'RinTube',
    language: 'React',
    content:
      'Youtube API를 사용하여 만들어본 페이지입니다. 인기있는 영상 목록을 불러와 렌더링하는 Main 페이지와 영상을 재생할 수 있는 Video 페이지로 구성되어 있습니다.',
    git: 'https://github.com/Leeharin115/Rintube',
    notion:
      'https://sunrise-soursop-181.notion.site/RinTube-f107762086054085b2ae3abbd5729230',
  },
  {
    id: 'p3',
    img: project_portfolio,
    title: '포트폴리오',
    language: 'React',
    content:
      '현재 보여지는 페이지로 React Router, Context API, styled-components를 사용하여 구현했습니다.',
    git: 'https://github.com/Leeharin115/Harin_Portfolio',
    notion:
      'https://sunrise-soursop-181.notion.site/Portfolio-ba39f81798264640a8f6a3b9b0990b42',
  },
  {
    id: 'p4',
    img: project_game,
    title: 'Acade Game Machine',
    language: 'HTML/CSS, JavaScript',
    content:
      '상단의 게임팩을 누르면 기계의 화면에서 게임을 할 수 있는 프로젝트입니다. 상단의 게임팩 중 2, 3번째의 공룡 게임과 블록깨기 게임을 담당했습니다.',
    git: 'https://github.com/acadeGame/arcadeGame',
    notion:
      'https://sunrise-soursop-181.notion.site/Game-Machine-63be776a6bbe4eff8a9cbac194605479',
  },
  {
    id: 'p5',
    img: 'https://picsum.photos/id/54/400/300',
    title: 'Bulletin Board',
    language: 'React',
    content: '이렇게 저렇게 만들어 본 요런 프로젝트',
    git: 'https://github.com/Leeharin115/Bulletin-Board',
    notion:
      'https://sunrise-soursop-181.notion.site/Bulletin-Board-a938ece0bb21470da6a112e9432994dc',
  },
];
