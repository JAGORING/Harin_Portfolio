import React, { useRef } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import media from '../theme/media';

import { projectItems } from '../data';
import ProjectCard from '../components/Project/ProjectCard';

const ProjectRin = styled.div`
  height: 100%;
  margin: -3rem 5rem;
  display: flex;
  align-items: center;
  ${media.small`
  margin: -3rem 0.5rem;
`};
  .rec-dot_active {
    background-color: ${(props) => props.color};
    box-shadow: 0 0 1px 3px ${(props) => props.color};
  }
  .rec-dot:focus,
  .rec-dot:hover {
    box-shadow: 0 0 1px 3px ${(props) => props.color};
  }
  .rec-dot_active:focus,
  .rec-dot_active:hover {
    background-color: ${(props) => props.color};
    box-shadow: 0 0 1px 3px ${(props) => props.color};
  }
  .rec-arrow {
    background-color: ${(props) => props.color};
    transition: all 0.3s ease;
    color: #222831;
  }
  .rec-arrow:focus,
  .rec-arrow:hover {
    color: #efefef;
    background-color: ${(props) => props.color};
    box-shadow: 0 0 1px 3px ${(props) => props.color};
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 700, itemsToShow: 1, itemsToScroll: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

const Project = ({ theme }) => {
  let resetTimeout;
  const carouselRef = useRef(null);
  return (
    <>
      <ProjectRin color={theme === 'light' ? '#66bfbf' : '#f7a91a'}>
        <Carousel
          ref={carouselRef}
          breakPoints={breakPoints}
          itemPadding={[15, 0]}
          enableAutoPlay={true}
          autoPlaySpeed={4000}
          onNextEnd={() => {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 4000);
          }}
        >
          {projectItems.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </Carousel>
      </ProjectRin>
    </>
  );
};

export default Project;
