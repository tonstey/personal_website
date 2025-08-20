import React from "react";
import { CgProfile } from "react-icons/cg";

export default function AboutPage() {
  return (
    <>
      <section className="flex h-full w-full flex-1 flex-col items-center overflow-hidden">
        <h1 className="text-center font-seurat text-4xl font-bold text-[#74664B]">
          About Me
        </h1>

        <div className="flex h-full w-[80%] flex-1 flex-wrap items-center justify-evenly text-[#74664B] md:w-[85%]">
          <CgProfile className="text-[150px] md:text-[300px]" />
          <div className="h-[50vh] w-full overflow-y-auto p-2 md:h-[65vh] md:w-[45%]">
            <p className="font-mono text-[14px] font-semibold leading-relaxed">
              Hi everyone, thank you for spending the time to view my website!
              <br /> <br />
              I am a student who is trying to pursue a career in front-end
              engineering, back-end engineering, full-stack engineering, or data
              analytics!
              <br /> <br />
              For more information about myself, I am currently an undergrad
              student at UC San Diego studying Mathematics and Computer Science
              as a joint major, with an expected graduation date of September
              2025! I have experience in full-stack software development and
              data science, with an interest in machine learning as well! I also
              have plans on pursuing higher education at UCSD, UCI, UCR, or
              CSULB after getting my Bachelor's degree.
              <br /> <br />
              In my free time, I love to learn, especially with the resources
              that are available today! In particular, I love watching
              information science videos on YouTube, learning more about the
              news or life hacks on TikTok (don't worry, I don't believe
              everything I see!), or learn how to cook through reality shows
              like MasterChef. I also enjoy playing video games. Some games that
              I have been playing for the longest time include League of
              Legends, Minecraft, Roblox, Valorant, and Teamfight Tactics!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
