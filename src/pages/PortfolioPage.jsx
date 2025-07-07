import React from "react"
import Masonry from "react-masonry-css";
import { projectinformation } from "../projectinfo";
import Project from "../components/Project";
import { Flex, Tabs } from "@radix-ui/themes";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'



export default function PortfolioPage() {
    const [projects, setProjects] = React.useState(projectinformation)
    const [selectedIndex, setIndex] = React.useState(0)

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        800: 1
    };

    const handleTabChange = (index) => {
        setIndex(index)
        if (index === 0) {
            setProjects(projectinformation)
        }
        else if (index === 1) {
            setProjects(projectinformation.filter(project => project.type === "Software Development"))
        }
        else if (index === 2) {
            setProjects(projectinformation.filter(project => project.type === "Data Science"))

        }
    }

    console.log(selectedIndex)
    return (
        <>
            <section className="flex flex-col justify-center items-center min-h-screen py-14 bg-lightGreen z-20 relative" id="portfoliopage">
                <h1 className="text-4xl font-bold mt-20">Projects</h1>

                <div className="flex flex-col justify-center items-center w-[95%] mt-8">
                    <h1 className="self-start text-xl font-bold">Current Project</h1>
                    <hr className="w-full h-[2px] bg-slate-300"></hr>

                    <div className="bg-darkenLightGreen w-[400px] p-4 rounded-xl my-10">
                        <h1 className="font-bold text-2xl">{projectinformation[0].name}</h1>
                        <div className="flex flex-wrap gap-2 mt-3">
                        {
                            projectinformation[0].languages.map(lang => {
                                return <h1 className="text-sm text-center border rounded-full px-2 italic">{lang}</h1>
                            })
                        }
                        </div>
                        <p className="text-[14px] mt-5">{projectinformation[0].description}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-[95%] mt-10">
                    <h1 className="self-start text-xl font-bold">Completed Projects</h1>
                    <hr className="w-full h-[2px] bg-slate-300"></hr>

                    <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange} className="mt-6">
                        <TabList className="flex gap-4 bg-darkGreen p-4 rounded-xl">
                            <Tab className="data-selected: px-2 py-1 rounded-lg bg-lightenDarkGreen">All</Tab>
                            <Tab className="px-2 py-1 rounded-lg bg-lightenDarkGreen" >Software Development</Tab>
                            <Tab className="px-2 py-1 rounded-lg bg-lightenDarkGreen" >Data Science</Tab>
                        </TabList>
                    </TabGroup>

                    <p className="mt-4">Click on the image to be sent to the demo! </p>

                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex -mx-2 mt-8"
                        columnClassName="px-4" 
                    >
                        {projects.map((project, index) => {
                            return index === 0 && selectedIndex === 0 ? null : <Project projectInfo={project}/>})}
                    </Masonry>
                </div>
            </section>
        </>
    )
}