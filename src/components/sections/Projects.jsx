import ProjectBox from "../projects/ProjectBox";
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
    <div className="flex text-center flex-col mx-auto bg-black text-white p-10">
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
