/* eslint-disable */
import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ name, category, imgUrl, projectUrl, gitHub }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <a href={`${projectUrl}`} target="_blank"><h4>{name}</h4></a>
          <span>{category}</span>
          <a href={`${gitHub}`} target="_blank"><h1>GitHub page</h1></a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
