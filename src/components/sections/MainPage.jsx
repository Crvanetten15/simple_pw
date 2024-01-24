function MainPage () {

  return (
    <div className="flex flex-col h-dvh justify-around animate-bg p-5 sticky top-0 z-[-1]">
      <div className="flex justify-around text-white">
        <h1 className="text-6xl lg:text-9xl md:text-9xl sm:text-6xl ease-in duration-300">
          I&apos;m Connor <br />
          Portfolio/24
        </h1>
      </div>
      <div className="flex flex-row justify-around text-white">
        <div className="w-1/2">
          <h1 className="font-bold text-center lg:text-6xl md:text-3xl sm:text-2xl text-2xl ease-in duration-300">Software Engineer</h1>
          <p className="text-center pt-5">
          LASTEST UPDATE ✦  JAN 2024 \/// <br />
          © CONNOR VAN ETTEN <br />
          WORKS ON MY MACHINE
          </p>
          </div>
        <div className="lg:text-6xl md:text-3xl sm:text-2xl text-2xl ease-in duration-300 w-1/2">
          ✺ Here is some of my latest activity. 
        </div>
      </div>
      </div>
  ) 
}

export default MainPage