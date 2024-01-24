import ProjectBox from "../projects/ProjectBox";
// import headshot from '../../assets/img/headshot.png';
import prologo from '../../assets/img/progress_logo.png';

const projects = [
  {
    "title": "ProVM",
    "sub": '✦ Progress ABL version manager for Powershell built in GoLang',
    'image': prologo,
    'link' : 'https://github.com/Crvanetten15/provm'
  },
  {
    "title": "ProGo",
    "sub": '✦ Progress ABL CLI tool for Powershell',
    'image': prologo,
    'link' : 'https://github.com/Crvanetten15/progo'
  },

];

function Projects() {
  return (
    <div className="flex text-center flex-col mx-auto bg-black text-white p-10">
      <h1 className="text-[5em] mb-[100px]" id="projects">
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
