function Experience () {

  return (
    <div className="rounded-t-3xl flex text-center flex-col sticky top-0 z-1 mx-auto h-dvh w-10/12 text-dark bg-metal p-10">
      <div>
        <h1 className="text-4xl">
          My Experience
        </h1>
      </div>
        <div className="grid grid-rows-3 grid-cols-2 pb-45 font-normal">
          <div className=" border-2 border-rose-500 bg-gray-200 p-4">
            <h1 className="text-2xl">Software Engineer</h1>
            <p>Factivity MES</p>
            <p><i>Aug/23 - Present</i></p>
          </div>
          <div className="bg-gray-300 p-4">
          Developing and optimizing core features of the Manufacturing Execution System (MES) using Progress OpenEdge technology.
          Collaborating with internal and external development teams to design, implement, and test software solutions that enhance the integration between the MES and QAD systems.
          </div>
          <div className="bg-gray-400 p-4">
            <h1 className="text-2xl">Research Assistant</h1>
            <p>Cleveland State University</p>
            <p><i>May/23 - Sept/23</i></p>
          </div>
          <div className="bg-gray-500 p-4">
          Conducting research and implementing Zero Knowledge Proofs (ZKPs) using GPU-based systems to enhance performance and explore advancements in secure computing technologies. Generating comprehensive project documentation to communicate research findings and contribute to knowledge dissemination in ZKPs and GPU-based systems.
          </div>
          <div className="bg-gray-600 p-4">
            <h1 className="text-2xl">Cloud Engineering Intern</h1>
            <p>Trek10, inc.</p>
            <p><i>Feb/22 - Sept/22</i></p>
          </div>
          <div className="bg-gray-700 p-4">
          Participated in Trek10’s Launch Program, where we were trained on AWS services to pass our AWS Certified Solutions Architect Exam. After Launch, I was assigned to a delivery team with another intern and mentor, where we worked on 3 open-source projects. Each task centered around creating a command line utility for SAM template transformations. At our final delivery day we showcased each individual and displayed &qout;CFN-TRANSFORM&qout;, which was a PyPi package allowing the user to retrieve a transformed template without AWS credentials.
          </div>
        </div>
    </div>
  )
}

export default Experience