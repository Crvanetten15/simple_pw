function MainPage () {

  return (
    <div className="flex flex-col h-dvh justify-around animate-bg p-5 sticky top-0 z-[-1]">
      <div className="flex justify-around text-white">
        <h1 className="lg:text-9xl md:text-9xl sm:text-4xl ease-in duration-300">
          I&apos;m Connor <br />
          Portfolio/24
        </h1>
        <div className="m-12 lg:block md:hidden sm:hidden">
          <a href="#projects" className="rounded-lg bg-dark-accent px-8 py-4 mr-12 hover:bg-metal">Projects</a>
          <a href="#" className="rounded-lg bg-dark-accent px-8 py-4 hover:bg-bubble-gum">Contact</a>
        </div>
      </div>
      <div className="flex flex-row justify-around text-white">
        <div className="w-1/2">
          <h1 className="font-bold text-center lg:text-6xl md:text-3xl sm:text-2xl ease-in duration-300">Software Engineer</h1>
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
  ) 
}

export default MainPage