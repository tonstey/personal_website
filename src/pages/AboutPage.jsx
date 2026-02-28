import { CgProfile } from "react-icons/cg";

export default function AboutPage() {
  return (
    <>
      <section className="min-h-[110vh]" id="about">
        <div className="mt-28 flex w-full flex-1 flex-col items-center gap-8">
          <h1 className="z-50 text-center font-seurat text-4xl font-bold text-[#74664B]">
            About Me
          </h1>

          <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-12">
            <CgProfile className="rounded-full border border-[#74664B] bg-[#f3e0c7] p-4 text-[14rem] text-[#74664B]" />
            <div className="relative flex w-[90%] items-center rounded-xl px-12 text-[#74664B] md:px-0">
              <img
                src="decoration/aboutvert.png"
                className="z-1 absolute -top-[5.3rem] right-8 w-32 md:hidden"
              ></img>

              <div className="h-full max-h-[100vh] w-full overflow-y-auto rounded-xl border-2 border-[#dcd3aa] bg-[#f3e0c7] p-6">
                <p className="font-nunito text-[15px] font-semibold leading-relaxed md:text-[16px] lg:text-[17px]">
                  Hi everyone, thank you for spending the time to view my
                  website!
                  <br /> <br />
                  I am a student who is trying to pursue a career in front-end
                  engineering, back-end engineering, full-stack engineering, or
                  data analytics!
                  <br /> <br />
                  For more information about my educational background, I have
                  recently graduated from UC San Diego with a Bachelors of
                  Science in Mathematics, with a specialization in Computer
                  Science! As of January 2026, I am enrolled at CSU Long Beach
                  getting my masters in Computer Science as well! I have
                  experience in full-stack software development and data
                  science, with an interest in machine learning as well!
                  <br /> <br />
                  In my free time, I love to learn, especially with the
                  resources that are available today! In particular, I love
                  watching information science videos on YouTube, learning more
                  about the news or life hacks on TikTok (don't worry, I don't
                  believe everything I see!), or learn how to cook through
                  reality shows like MasterChef. Speaking of film that I enjoy
                  watching, I really love sitcoms, such as Modern Family, New
                  Girl, Brooklyn 99, etc. This stems from the shows I watched as
                  a kid, watching Disney and Nick shows, like That's So Raven,
                  Hannah Montana, Drake & Josh, ICarly, and Victorious, which
                  also played a huge factor in my personality and humor today!
                  <br /> <br />
                  I also enjoy playing video games. I have become infatuated
                  with staring at a screen at the unhealthy age of 5! My first
                  video game shown to me was Digimon Battle RPG, where I caught
                  Digimon to train. Since I was so young, I didn't understand
                  what most of the words meant, so I accidentally released my
                  Digimon instead of resurrecting them when they died. My first
                  "horror" game was the Phineas and Ferb DS game, where I was so
                  scared of being caught by Candace that I never touched the
                  game after 10 minutes of playing it. I later found the game
                  Roblox in the winter of 2009, before the company that we all
                  know today. It is quite amazing to see how evolved it became.
                  I used to play horrible blocky tycoons and obstacles, or
                  obbies. I also remember the constant ridicules that the game
                  received for being a "Minecraft copy". Oh how the times have
                  changed. Some other games that I have been playing for the
                  longest time include League of Legends, Minecraft, Valorant,
                  and Teamfight Tactics!
                  <br /> <br />I have recently come back from a study abroad
                  program I did in South Korea, specifically Yonsei University
                  in Seoul! I spent 4 months in the beautiful country, exploring
                  all of scenery, while spending lots of time shopping and
                  eating at much lower prices than the U.S. I also indulged in
                  my interest in K-Pop going to concerts as well, like TXT and
                  Le Sserafim. If you like them as well or want some song
                  recommendations, or even recommendations about what to do in
                  South Korea in general, feel free to shoot me a message in the
                  Contact Me section!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
