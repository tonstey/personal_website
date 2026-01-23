import { CgProfile } from "react-icons/cg";

export default function AboutPage() {
  return (
    <>
      <section className="flex h-full w-full flex-1 flex-col items-center overflow-hidden">
        <h1 className="z-50 text-center font-seurat text-4xl font-bold text-[#74664B]">
          About Me
        </h1>

        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-[60%] w-[90%] items-center rounded-xl bg-[#f3e0c7] text-[#74664B] md:pl-[20rem] lg:pl-[30rem]">
            <img
              src="decoration/aboutvert.png"
              className="z-1 absolute -top-[5.3rem] right-8 w-32 md:hidden"
            ></img>
            <img
              src="decoration/about.png"
              className="absolute -bottom-8 -left-8 hidden w-[20rem] md:block lg:w-[30rem]"
            ></img>
            <div className="h-full w-full overflow-y-auto rounded-xl p-6">
              <p className="font-nunito text-[15px] font-semibold leading-relaxed md:text-[16px] lg:text-[17px]">
                Hi everyone, thank you for spending the time to view my website!
                <br /> <br />
                I am a student who is trying to pursue a career in front-end
                engineering, back-end engineering, full-stack engineering, or
                data analytics!
                <br /> <br />
                For more information about myself, I have recently graduated
                from UC San Diego with a Bachelors of Science in Mathematics,
                with a specialization in Computer Science! As of January 2026, I
                am enrolled at CSU Long Beach getting my masters in Computer
                Science as well! I have experience in full-stack software
                development and data science, with an interest in machine
                learning as well!
                <br /> <br />
                I have recently come back from a study abroad program I did in
                South Korea, specifically Yonsei University in Seoul! I spent 4
                months in the beautiful country, exploring all of scenery, while
                spending lots of time shopping and eating at much lower prices
                than the U.S. I also indulged in my interest in K-Pop going to
                concerts as well, like TXT and Le Sserafim. If you like them as
                well or want some song recommendations, or even recommendations
                about what to do in South Korea in general, feel free to shoot
                me a message in the Contact Me section!
                <br /> <br />
                In my free time, I love to learn, especially with the resources
                that are available today! In particular, I love watching
                information science videos on YouTube, learning more about the
                news or life hacks on TikTok (don't worry, I don't believe
                everything I see!), or learn how to cook through reality shows
                like MasterChef. I also enjoy playing video games. Some games
                that I have been playing for the longest time include League of
                Legends, Minecraft, Roblox, Valorant, and Teamfight Tactics!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
