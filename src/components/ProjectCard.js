import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/ProjectCard.css';

function ProjectCard ({ projectName, paragraph1, paragraph2, paragraph3, projectImage, projectLink, repoLink }) {
  return (
    <Card className="text-center main-card" key={ projectName }>
    <a href={ projectLink } target="_blank" rel="noreferrer">
      <Card.Img
          className="card-image"
          src={ projectImage }
          alt="Recipes app image"
    />
    <Card.ImgOverlay
            className="d-flex
            justify-content-center align-items-center card-image-overlay"
      >
        <Card.Title
          className="m-0 text-white fs-1 card-title"
        >
          { projectName }
        </Card.Title>
      </Card.ImgOverlay>
    </a>
    <Card.Body className="card-body">
      <Card.Text>
        <p className="card-text">{ paragraph1 }</p>
        <p className="card-text">{ paragraph2 }</p>
        <p className="card-text">{ paragraph3 }</p>
        <p className="repo-text">Confira o código <a href={ repoLink } target="_blank" rel="noreferrer">aqui!</a></p>
      </Card.Text>
    </Card.Body>
  </Card>
)
};

export default ProjectCard; 