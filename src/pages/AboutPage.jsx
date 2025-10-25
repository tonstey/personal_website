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
              For more information about myself, I have recently graduated from
              UC San Diego with a Bachelors of Science in Mathematics, with a
              specialization in Computer Science! As of January 2026, I am
              enrolled at CSU Long Beach getting my masters in Computer Science
              as well! I have experience in full-stack software development and
              data science, with an interest in machine learning as well!
              <br /> <br />
              I have recently come back from a study abroad program I did in
              South Korea, specifically Yonsei University in Seoul! I spent 4
              months in the beautiful country, exploring all of scenery, while
              spending lots of time shopping and eating at much lower prices
              than the U.S. I also indulged in my interest in K-Pop going to
              concerts as well, like TXT and Le Sserafim. If you like them as
              well or want some song recommendations, or even recommendations
              about what to do in South Korea in general, feel free to shoot me
              a message in the Contact Me section!
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
