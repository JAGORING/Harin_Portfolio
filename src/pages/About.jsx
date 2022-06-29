import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div>this is About page</div>
      <ul>
        <li>
          <Link to='/about/info'>자기소개</Link>
        </li>
        <li>
          <Link to='/about/skills'>SKILLS</Link>
        </li>
        <li>CONTACT</li>
      </ul>
    </>
  );
};

export default About;
