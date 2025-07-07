import React from "react";
import { FaGithubSquare } from "react-icons/fa";


export default function Project({projectInfo}) {
    
    return (
        <>
            <div className="flex flex-col relative justify-start items-center w-[380px] bg-darkenLightGreen border border-black mb-16 rounded-3xl">
                <a href={projectInfo.demoURL} className="flex items-start w-full h-[200px] overflow-hidden rounded-t-3xl" target="_blank">
                    <img src={projectInfo.imageURL || "project_images/noimg.jpg"} alt="img" className={`w-full ${projectInfo.imageURL ? "hover:scale-[120%] hover:cursor-pointer transition-all duration-500 ease-in-out": ""}`}/>
                </a>
                    
                <div className="p-6">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-3xl">{projectInfo.name}</h1>
                        <h1 className="italic text-lg">{projectInfo.date}</h1>
                    </div>
                    <p className="text-[14px] mt-4">{projectInfo.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3 ">
                        {
                            projectInfo.languages.map(lang => {
                                return <h1 className="text-sm text-center border rounded-full px-2 italic">{lang}</h1>
                            })
                        }
                    </div>
                </div>

                <a href={projectInfo.githubURL} className="absolute top-3 right-3" target="_blank">
                    <FaGithubSquare className="text-white text-5xl bg-black rounded-lg hover:cursor-pointer"/>
                </a>
                <p className="absolute top-3 left-3 bg-slate-300 rounded-lg p-2 text-black text-center text-sm">{projectInfo.type}</p>
            </div>
        </>
    )
}