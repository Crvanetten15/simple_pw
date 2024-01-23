function Home() {
  return (
      <>
      <div className="flex flex-col sticky top-0 z-0 h-dvh justify-around animate-bg p-5">
      <div className="flex justify-around text-white">
        <h1 className="lg:text-9xl md:text-6xl sm:text-4xl ease-in duration-300">
          I&apos;m Connor <br />
          Portfolio/24
        </h1>
        <div className="m-12">
          <a href="#projects" className="rounded-lg bg-dark-accent px-8 py-4 mr-12">Projects</a>
          <a href="#" className="rounded-lg bg-dark-accent px-8 py-4">Contact</a>
        </div>
      </div>
      <div className="flex flex-row justify-around text-white">
        <div className="w-1/2">
          <h1 className="text-center lg:text-6xl md:text-3xl sm:text-2xl ease-in duration-300">Software Engineer</h1>
          <p className="text-center pt-5">
          LASTEST UPDATE ✦  JAN 2024 \/// <br />
          © CONNOR VAN ETTEN <br />
          WORKS ON MY MACHINE
          </p>
          </div>
        <div className="lg:text-6xl md:text-3xl sm:text-2xl ease-in duration-300 w-1/2">
          ✺ Here is some of my latest activity. 
        </div>
      </div>
      </div>
      <div className="rounded-t-lg flex text-center flex-col sticky top-0 z-1 mx-auto h-dvh w-10/12 text-dark bg-white p-10">
        <h1 className="text-6xl mb-12">
          Who am I?
        </h1>
        <p className="text-3xl">
        Simplicity is prerequisite for reliability.
-Edsger Dijkstra

Hi, I am Connor, a Software Developer. I am on the evergoing pursuit to make ideas come to life through code. If you can think of it, I assure there is a path to it through modern technology, and I would like to aid you on that journey.


Along side my development motives, I run a tech blog. If you are interested in the Cloud, the Web, coding in general or just what I think please navigate to the text tab above.


Outside of programming, I enjoy powerlifting and hiking. These help me achieve a balance between my digital life and my physical life. If you happen to share these extended hobbies feel free to contact me regarding them as well.


Enjoy some of my highlights below. If you would like to see more of my work, you can find my full projects list here.
        </p>
      </div>
      <div className="rounded-t-lg flex text-center flex-col sticky top-0 z-1 mx-auto h-dvh w-10/12 text-dark bg-metal p-10">
        <h1 className="text-6xl mb-12">
          What I Do
        </h1>
        <p className="text-3xl">
          Simply... I create. 
        </p>
        <p className="text-3xl">
          I currently work for a software company as a applications developer working on a MES system based in both desktop and web technologies. Our tech stack includes Progress ABL, .NET, Python, Javascript, and SQL to create multiple different systems. I currently work to improve this stack and bring our company closer to software industry standards along with making updates and patches to our current builds. 
        </p>
        <p className="text-3xl">
          Outside of my 9-5, I am extremely passionate about Web Development and CLI development both of which I offer freelance work if needed. Please feel free to examine my projects along these topics if you are looking for my services. 
        </p>
      </div>
      <div className="rounded-t-lg flex text-center flex-col sticky top-0 z-1 mx-auto h-dvh w-10/12 text-dark bg-bermuda p-10">
        <h1 className="text-6xl mb-12">
          What I use to Create
        </h1>
        <p className="text-3xl">
          As a software engineer the tools that I use are just that tools. I prefer to look and pick the correct language for the job and not force a pussle piece where it doesnt fit just because I am familiar with it.
          <br />
          Learning is a constant in the space of software and a developer can become a creature of habit too easily.
          <br />
          Below includes a list of what I currently perfer to use personally. 
        </p>
      </div>
      <div className="rounded-t-lg flex text-center flex-col sticky top-0 z-1 mx-auto h-dvh w-10/12 bg-white text-dark bg-bermuda p-10">
        <h1 className="text-6xl mb-12" id="projects">
          Projects
        </h1>
        <p className="text-3xl">
          As a software engineer the tools that I use are just that tools. I prefer to look and pick the correct language for the job and not force a pussle piece where it doesnt fit just because I am familiar with it.
          <br />
          Learning is a constant in the space of software and a developer can become a creature of habit too easily.
          <br />
          Below includes a list of what I currently perfer to use personally. 
        </p>
      </div>
      </>
  );
}

export default Home
