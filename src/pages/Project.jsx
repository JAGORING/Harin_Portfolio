import React, { useRef } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

import { projectItems } from '../data';
import ProjectCard from '../components/Project/ProjectCard';

const Wrap = styled.div`
  margin: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Project = () => {
  let resetTimeout;
  const carouselRef = useRef(null);
  return (
    <>
      <Wrap>
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
      </Wrap>
    </>
  );
};

export default Project;
