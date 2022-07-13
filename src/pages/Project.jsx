import React, { useRef } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

import { projectItems } from '../data';
import ProjectCard from '../components/Project/ProjectCard';

const ProjectRin = styled.div`
  margin: auto 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

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
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
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
            <ProjectCard key={item.id} item={item} theme={theme} />
          ))}
        </Carousel>
      </ProjectRin>
    </>
  );
};

export default Project;
