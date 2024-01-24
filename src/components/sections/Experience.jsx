function Experience() { return (
  <div
    className="flex text-center flex-col mx-auto rounded-t-[100px] bg-grey p-10 z-[-1] h-dvh-plus-100"
  >
    <div>
      <h1 className="text-4xl">My Experience</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6">
      {/* Software Engineer */}
      <div className="bg-gray-100 p-4 shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold">Software Engineer</h1>
        <p className="text-md mt-2">Factivity MES</p>
        <p className="text-sm italic mt-1">Aug/23 - Present</p>
      </div>
      <div className="bg-gray-200 p-4 shadow-sm">
        <p>
          Developing and optimizing core features of the Manufacturing Execution
          System (MES) using Progress OpenEdge technology. Collaborating with
          internal and external development teams to design, implement, and test
          software solutions that enhance the integration between the MES and QAD
          systems.
        </p>
      </div>
  
      {/* Research Assistant */}
      <div className="bg-gray-100 p-4 shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold">Research Assistant</h1>
        <p className="text-md mt-2">Cleveland State University</p>
        <p className="text-sm italic mt-1">May/23 - Sept/23</p>
      </div>
      <div className="bg-gray-200 p-4 shadow-sm">
        <p>
          Conducting research and implementing Zero Knowledge Proofs (ZKPs) using
          GPU-based systems to enhance performance and explore advancements in
          secure computing technologies. Generating comprehensive project
          documentation to communicate research findings and contribute to
          knowledge dissemination in ZKPs and GPU-based systems.
        </p>
      </div>
  
      {/* Cloud Engineering Intern */}
      <div className="bg-gray-100 p-4 shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold">
          Cloud Engineering Intern
        </h1>
        <p className="text-md mt-2">Trek10, inc.</p>
        <p className="text-sm italic mt-1">Feb/22 - Sept/22</p>
      </div>
      <div className="bg-gray-200 p-4 shadow-sm">
        <p>
          Participated in Trek10’s Launch Program, where we were trained on AWS
          services to pass our AWS Certified Solutions Architect Exam. After
          Launch, I was assigned to a delivery team with another intern and
          mentor, where we worked on 3 open-source projects. Each task centered
          around creating a command line utility for SAM template transformations.
          At our final delivery day we showcased each individual and displayed
          &34;CFN-TRANSFORM&34;, which was a PyPi package allowing the user to retrieve
          a transformed template without AWS credentials.
        </p>
      </div>
    </div>
  </div>
  ); } export default Experience;
  