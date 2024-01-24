import  headshot  from "../../assets/img/headshot.png"

function About () {

  return (
    <div className=" flex text-center flex-col z-1 rounded-t-[100px] mx-auto h-dvh-plus-100 sticky top-[-32px] z-[-1] text-dark bg-white p-10 mb-[-100px]">
    <h1 className="text-6xl  my-12">
      Who am I?
    </h1>
    <div className="font-normal text-xl lg:text-2xl md:text-2xl sm:text-xl lg:px-48 md:px-24 sm:px-10 ">
    <p className="px-10">
    simply put. <br />
    I create.
    <br />
    <br />
    Hi, I am Connor, a Software Developer. I am on the evergoing pursuit to make ideas come to life through code. If you can think of it, I assure there is a path to it through modern technology, and I would like to aid you on that journey.
    <br />
    <br />
    Along side my development motives, I run a tech blog. If you are interested in the Cloud, the Web, coding in general or just what I think please navigate to the text tab above.
    Outside of programming, I enjoy powerlifting and hiking. These help me achieve a balance between my digital life and my physical life. If you happen to share these extended hobbies feel free to contact me regarding them as well.
    <br />
    <br />
    Enjoy some of my highlights below. If you would like to see more of my work, you can find my full projects list here.
    </p>
    </div>
    <div className="flex justify-around bg-white rounded-full mt-0 m-8">
      <img src={ headshot } className="size-96" alt="Profile Picture" />
    </div>
  </div>
  )
}

export default About;