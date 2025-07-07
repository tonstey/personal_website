import React from "react";
import { CgProfile } from "react-icons/cg";

export default function AboutPage() {
    return(
        <>
            <section id="aboutpage" className="flex flex-col bg-lightGreen justify-center items-center min-h-screen py-14 text-lightYellow z-20 relative">
                <h1 className="text-4xl text-lightBrown font-bold font-retro mt-20">About Me</h1>


                <div className="flex w-[85%] justify-evenly items-center mt-14 font-retro">
                    <CgProfile className="text-[300px]"/>
                    <p className="w-[45%] text-[14px] font-mono">
                        Hi everyone, thank you for spending the time to view my website!
                        <br /> <br />
                        I am a student who is trying to pursue a career in front-end engineering, back-end engineering, full-stack
                        engineering, or data analytics!
                        <br /> <br />
                        For more information about myself, I am currently an undergrad student at UC San Diego studying 
                        Mathematics and Computer Science as a joint major, with an expected graduation date of June or September 2025! 
                        I have learned full-stack engineering and will be learning more about Data Science & Machine Learning 
                        this upcoming term. I also have plans on pursuing higher education at CSUF or CSULB after getting my 
                        Bachelor's degree.
                        <br /> <br />
                        In my free time, I love to learn, especially with the resources that are available today! In particular,
                        I love watching information science videos on YouTube, learning more about the news or life hacks on TikTok (don't worry, 
                        I don't believe everything I see!), or learn how to cook through reality shows like MasterChef. I also
                        enjoy playing video games. Some games that I have been playing for the longest time include League of Legends,
                        Minecraft, Roblox, Valorant, and Teamfight Tactics!
                    </p>

                </div>
                    
            </section>
        </>
    )
}