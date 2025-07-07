import React from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";



export default function Sidebar() {
   const pages = ["home", "about", "resume", "portfolio", "contact"]

    


    return (
        <>
            <div className="flex bg-darkGreen text-darkBrown fixed top-0  inset-x-0 justify-around items-center h-28 z-50 shadow-xl px-6" id="sidebar">

                <h1 className="text-4xl font-bold font-title tracking-[0.24rem] text-center">Tony Vuong</h1>

                <div className="flex bg-lightenDarkGreen justify-center items-center text-base shadow-[inset_0_-0px_5px_rgba(0,0,0,0.2)] rounded-full p-3 h-20">
                    {
                        pages.map((page) => {
                            return (
                                <a href={`#${page}page`} key={page}>
                                    <div className="flex items-center transition-all duration-250 h-14 w-14 lg:w-[7.5rem] rounded-full overflow-hidden hover:cursor-pointer">
                                        <img className="w-8 h-8 ml-3 text-white" src={`sidebar_images/${page}icon.png`} />
                                        <span className="ml-3 text-lightYellow">{page.charAt(0).toUpperCase() + page.slice(1)}</span>
                                    </div>
                                </a>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}