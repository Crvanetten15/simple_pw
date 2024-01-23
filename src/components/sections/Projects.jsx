import ProjectBox from "../projects/project_box";
import headshot from '../../assets/img/headshot.png';

const projects = [
  {
    "title": "example 1",
    "sub": 'a project type',
    'image': headshot,
    'link' : 'https://github.com/Crvanetten15'
  },
  {
    "title": "example 1",
    "sub": 'a project type',
    'image': headshot,
    'link' : 'https://github.com/Crvanetten15'
  },

];

function Projects() {
  return (
    <div className="rounded-t-3xl flex text-center flex-col sticky top-0 z-1 mx-auto h-dvh w-10/12 bg-white text-dark bg-bermuda p-10">
      <h1 className="text-6xl mb-12" id="projects">
        Projects
      </h1>
      {projects.map((project, index) => (
        <ProjectBox
          key={index}
          title={project.title}
          subheading={project.sub}
          image={project.image}
          gitlink={project.link}
        />
      ))}
    </div>
  )
}

export default Projects;
