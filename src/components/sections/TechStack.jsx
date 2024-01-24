import ContinuousScrollText from "../scrolling/ContinuousScrollText"

function TechStack () {

  return (
    <div className="flex rounded-t-[100px] text-center justify-around flex-col z-[-1] mx-auto text-dark h-dvh-plus-100 bg-white p-10">
    <h1 className="text-6xl mb-12">
      My Tech Stack
    </h1>
    <div className="font-light text-xl">
    <p className="font-normal">
      As a software engineer the tools that I use are just that tools. I prefer to look and pick the correct language for the job and not force a puzzle piece where it doesnt fit just because I am familiar with it.
      <br />
      Learning is a constant in the space of software and a developer can become a creature of habit too easily.
      <br />
      Below includes a list of what I currently perfer to use personally: 
    </p>
    </div>
    <ContinuousScrollText />
  </div>
  )
} export default TechStack
