import React from 'react';

import ProjectCard from './ProjectCard';

import { projects, visualHeading, projectsList } from './Projects.module.scss';

const Projects = () => {
  	const allProjects = [
      {
        // image: MadlibsImg,
        heading: 'Madlibs App',
        skills: 'React - Firebase - JSX - SASS',
        description:
          'Distract the kids with this fun and classy Madlibs Web App. The user follows the prompts laid out before them and the app does the rest. There are two templates to choose from. Plus the user can save their madlib and see it displayed on our leaderboard!',
        links: ['https://fourbn.github.io/madlibsApp/', 'https://github.com/Fourbn/madlibsApp'],
        type: 'genderQueerPurple'
      },
      {
        // image: DragNameImg,
        heading: 'Drag Name Generator',
        skills: 'JavaScript - jQuery - SASS',
        description:
          'Do you need a Drag Queen name for your next performance? Use this handy, lightweight Drag Queen Name Generator to get you started. Name combinations are randomized based on your first and last name.',
        links: [
          'https://fourbn.github.io/dragQueenNameGenerator/',
          'https://github.com/Fourbn/dragQueenNameGenerator'
        ],
        type: 'transPink'
      },
      {
        // image: UnderSeaImg,
        heading: 'Under the Sea',
        skills: 'HTML - SASS - jQuery',
        description:
          'A multi-page PSD conversion from a Juno College provided design template and styleguide. All pages are fully responsive down to 320px and links connect the three pages to each other.',
        links: [
          'https://fourbn.github.io/junoPSDConversion/',
          'https://github.com/Fourbn/junoPSDConversion'
        ],
        type: 'transBlue'
      },
      {
        // image: NewIdentityImg,
        heading: 'New Identity, Who Dis',
        skills: 'jQuery - API - Pair Programming',
        description:
          "We at Globex Corporation do not support catfishing. But if you need a new online identity, this app has you covered. Developed with <a class='winnie' href='https://heyitswinnie.io/' target='_blank' rel='noopener'>Winnie Ku</a>, this app uses two APIs to deliver a fun, unique commentary on internet identity.",
        links: [
          'https://globex-inc.github.io/newIdentityWhoDis/',
          'https://github.com/Globex-Inc/newIdentityWhoDis'
        ],
        type: 'agenderGreen'
      }
    ];

  return (
    <section className={projects}>
      <h2>Projects</h2>
      <p className={`${visualHeading} visualHeading`}>Curious What I've Done?</p>
      <ul className={projectsList}>
        {allProjects.map((project, index) => (
          <li key={project.image}>
            <ProjectCard projectContent={project} order={index + 1} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
