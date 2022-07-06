import React from 'react';

import * as ProjectCardStyles from './ProjectCard.module.scss';

const ProjectCard = ({ projectContent, order }) => {
  const isEvenCard = order % 2 === 0;
  return (
    <div className={ProjectCardStyles.projectCard}>
      <div
        className={`${ProjectCardStyles.imageContainer} ${ProjectCardStyles[projectContent.type]} ${
          isEvenCard ? ProjectCardStyles.even : ProjectCardStyles.odd
        }`}
      >
        {/* <img
          src={projectContent.image}
          alt={`Screenshot of the ${projectContent.heading} project`}
        /> */}
      </div>
      <div
        className={`${ProjectCardStyles.textContainer} ${ProjectCardStyles[projectContent.type]}  ${
          isEvenCard ? ProjectCardStyles.even : ProjectCardStyles.odd
        }`}
      >
        <p className={ProjectCardStyles.skills}>{projectContent.skills}</p>
        <h3>{projectContent.heading}</h3>
        <p
          className={ProjectCardStyles.description}
          dangerouslySetInnerHTML={{
            __html: projectContent.description
          }}
        />
        <div className={ProjectCardStyles.links}>
          {projectContent.links.map((link, index) => (
            <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="button">
              {index === 0 ? 'Live Site' : 'GitHub Repo'}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
