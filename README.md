# Portfolio

Top, About, Project, Contact 페이지로 구성된 포트폴리오

### 1. React를 사용하여 구현했습니다.

- function components 사용
- React Hook 사용
- SPA 다중 페이지 구축을 위해 React Router 사용
- Dark / Light 모드를 구현하기 위해 Context API 사용

### 2. 미디어쿼리를 사용하여 반응형으로 구현했습니다.

```
  const sizes = {
    small: 700,
    medium: 1050,
    large: 1200,
  };
```

- 화면의 크기에 맞춰서 3가지로 나눔

### 3. Carousel 사용을 위해 라이브러리 사용

- <code>react-elastic-carousel</code>를 사용하여 Project Card에 Carousel 적용함

## 각 화면의 구성

1. portFolio<br/>

- 각 페이지로 스크롤 이동할 수 있는 header 메뉴
- Dark, Light 모드 토글 버튼

2. Top<br/>

- About 페이지로 내려가는 버튼

3. About

- router를 이용한 info, skills, QnA 페이지 이동
- QnA 선택한 질문의 답만 보이도록 구현

4. Project

- 프로젝트의 이미지, 이름, 사용 언어, 간단한 설명을 기록하고 코드가 담긴 gitHub와 관련 내용을 정리한 Notion 링크로 이동하는 버튼을 담은 Card 구현
- Carousel을 사용하여 Card를 넘기면서 볼 수 있도록 구현

5. Contact

- Email.js를 사용하여 메일을 보낼 수 있도록 구현
