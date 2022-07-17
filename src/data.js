import { TbListDetails, TbGrowth, TbSettings } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';
import project_portfolio from './images/project_port.jpg';
import project_rintube from './images/project_rintube.png';
import project_carrot from './images/project_carrot.png';
import project_game from './images/project_game.jpg';
import project_leaders from './images/project_leaders.jpg';

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
    question: '프론트엔드에 흥미를 가지게 된 계기가 있나요?',
    answers: [
      '졸업이 다가오면서 내가 진짜로 흥미가 있고 도전해보고 싶은 분야가 어디일까? 생각해본 적이 있습니다.',
      '그런 고민을 하던 중, 운 좋게 사이트를 만들어 볼 기회가 생겨 리더스도준병원(https://leadersdojun.com) 사이트를 제작하게 되었습니다. 당시에는 프론트엔드 개발을 처음 접해서 HTML/CSS, JS, Bootstrap을 사용할 수 있을 정도로만 빠르게 공부하고, 한 달정도 시간을 들여 구현해보았습니다.',
      '부족한 점도 많았지만 사용자가 직접 접속할 수 있는 사이트를 내 손으로 직접 만들었다는 사실이 너무 신기하고 뿌듯하게 느껴졌습니다',
      '그 후로 웹 개발에 필요한 기술 스택에 대해 흥미를 가지고 공부를 하게 되었고, 최근에는 JavaScript의 라이브러리인 React를 사용해 관련 토이프로젝트를 만들어보며 실력을 키우고 있습니다.',
    ],
  },
  {
    id: 'q2',
    question:
      '프론트엔드 개발의 기술을 향상시키기 위한 본인의 노력 및 학습 방법에 대해서 얘기해주세요!',
    answers: [
      '처음 새로운 기술을 공부할 때 개념을 제대로 다지는 것이 중요하다고 생각합니다.',
      '강의를 들으면서 공부하는 경우도 많지만 제일 중요하게 생각하는 공부 방법은 해당 기술의 공식 문서를 읽어보고 깨닫게 된 방법을 간단한 예시나 토이 프로젝트를 만들어보는 방법입니다.',
      '내용을 머리로만 이해하는 것 보다 간단한 프로젝트라도 만들어보면서 익히게 되면 생각치 못한 오류를 찾게 될 수도 있고, 해결해 보면서 확실하게 짚고 넘어갈 수 있습니다. 강의를 통해 클론 코딩을 진행할 때도 혼자 고심하면서 먼저 만들어 본 후 강의를 듣고, 프로젝트를 진행하면서 새로 깨닫게 된 점을 Notion에 기록하면서 공부하고 있습니다.',
      '그리고 React를 공부하면서 기본이 되는 JavaScript를 제대로 정리하고 싶어 5주간 스터디를 진행했습니다. 과제를 수행하고 스터디원들과 코드리뷰를 주고받으며 또 한번 성장하는 경험을 할 수 있었습니다.',
    ],
  },
  {
    id: 'q3',
    question: '자신의 장 단점을 애기해본다면?',
    answers: [
      '새로운 일을 접하거나 새로 공부한 것에 대해 습득력이 빠르다는 것을 느꼈습니다. 그리고 더 효율적이고 나은 결과를 얻기 위해서 항상 생각하고 노력하는 성향을 가지고 있습니다. 처음 접하는 분야의 아르바이트를 할 때마다 맡은 일에 대한 이해도가 빠르고 책임감이 높아서 신뢰가 가고 믿을 수 있다는 평가를 자주 들었습니다.',
      '하지만 어느 정도 실력이 되고 그 실력이 고착이 될 때 흥미를 잃는 경우가 있습니다. 그럴 땐 스스로를 돌아보고 단기적인 목표를 세워 해야할 일과 목표를 성취함을 통해 단점을 극복하고 있습니다.',
    ],
  },
  {
    id: 'q4',
    question: '개발에 있어서 제일 중요하다고 생각하는 점이 있나요?',
    answers: [
      '우선 첫번째로 단순히 개발에 만족하지 않고 사용자가 애정을 가질 수 있는 서비스를 만드는 것이 중요하다고 생각합니다.',
      '인터넷이나 휴대폰으로 서핑을 할때, 전보다 앱이나 웹의 퀄리티가 좋은 제품이 많다는 사실이 느껴졌습니다. 어떤 점이 다를까? 고민해보던 중 제가 자주 사용하게 되는 사이트들의 공통점을 생각해보았을 때 쉽게 간과할 수 있는 디테일을 놓치지 않는다는 것을 알 수 있었습니다.',
      '그래서 사용자 입장에서 흥미를 가질 수 있고, 중요한 디테일들을 놓치지 않도록 더 고민하고 실현해내는 점이 중요하다고 생각합니다.',
      '두번째로는 커뮤니케이션이 잘 되는, 소통이 유연한 사람이 되어야 한다는 점입니다.',
      '개발자는 혼자만 일하는 것보다 팀 단위로 프로젝트를 함께 진행하는 일이 많고 다른 직군의 동료들과도 맞춰야할 일이 많다고 알고 있습니다. 또한 프론트엔드는 사용자와 밀접한 연관이 있으므로 서비스에 큰 영향을 줄 수 있습니다.',
      '동료들과 의견을 정중하면서 솔직하게 주고 받는 능력은 더 높은 퀄리티의 코드를 얻게 되고, 사용자에게 더 나은 방향의 서비스를 제공하는 방법 중 하나라고 생각합니다.',
    ],
  },
  {
    id: 'q5',
    question: '어떤 개발자가 되고 싶나요?',
    answers: [
      '스스로를 멋있다고 생각할 수 있는, 계속 성장하는 개발자가 되고 싶습니다.',
      '프로젝트를 진행하면서 구현이 어려운 상황이 생겼을 때 포기하지 않고 끝까지 노력한다면 그만큼 보람도 있고 더 좋은 기능을 구현할 수 있는 바탕이 될 것입니다. 모르는 것이 생겼을 때, 바로 포기하는 것이 아니라 어떻게 해결하면 좋을지 방법을 찾아내고 스스로에게 계속 질문을 던지면서 답을 얻으려고 노력할 것 입니다.',
      '문제를 해결하고 새로운 기능을 개발해보면서 이전의 나보다 다양해진 관점으로 문제를 들여다보고 성장하는 스스로의 모습을 뿌듯해할 수 있는 개발자가 되고 싶습니다.',
    ],
  },
];

export const projectItems = [
  {
    id: 'p1',
    img: project_carrot,
    title: '당근 게임',
    language: 'HTML/CSS, JavaScript',
    content:
      'DreamCoding의 브라우저101 강의를 참고해서 만든 게임 프로젝트입니다. 곤충을 피해서 모든 당근을 클릭해서 모두 없애는 방식으로 진행됩니다.',
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
      '현재 보여지는 페이지로 React Router, Context API, styled-components 등을 사용하여 구현했습니다.',
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
    img: project_leaders,
    title: '리더스도준병원 홈페이지',
    language: 'HTML/CSS, JavaScript, Bootstrap',
    content:
      '외주를 받아 처음 만들어본 실제 사용자가 이용할 수 있는 홈페이지입니다. (노션 링크 클릭 시 노션 페이지가 아닌 실제 사이트로 이동합니다.)',
    git: 'https://github.com/Leeharin115/leadersdojun',
    notion: 'https://leadersdojun.com/',
  },
];
