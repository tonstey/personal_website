import { useState } from "react";

import { projectinformation } from "../data/projectinfo";
import Project from "../components/portfolio/Project";
import useWebStore from "../store/store";

import { motion, AnimatePresence } from "framer-motion";

import { BsFileEarmarkCodeFill, BsFillClipboardDataFill } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { FaScrewdriverWrench, FaGithub } from "react-icons/fa6";

export default function PortfolioPage() {
  const [projects, setProjects] = useState(projectinformation);

  const store = useWebStore((state) => state.displayProject);
  const setProject = useWebStore((state) => state.setDisplayProject);

  return (
    <>
      <section className="flex flex-1 flex-col items-center overflow-x-hidden">
        <h1 className="mb-2 text-center font-seurat text-4xl font-bold text-[#74664B]">
          Projects
        </h1>

        <div className="grid h-full w-full grid-cols-11 overflow-hidden">
          {/* BEGIN LEFT SIDE */}
          <div
            className={`${store.name ? "hidden" : "col-span-11 flex"} h-full flex-wrap justify-center gap-4 overflow-y-auto p-4 md:col-span-7 md:flex`}
            id="scrollprojects"
          >
            {projects.map((item) => (
              <Project key={item.name} projectInfo={item} />
            ))}
          </div>
          {/* END LEFT SIDE */}

          {/* BEGIN RIGHT SIDE */}
          {store.name ? (
            <AnimatePresence mode="wait">
              <motion.div
                key="project-detail"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`${store.name ? "col-span-11 flex" : "hidden"} h-full flex-col items-center justify-between gap-3 overflow-hidden p-4 md:col-span-4 md:flex`}
              >
                {/* BEGIN HEADER */}
                <div className="flex w-full flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-[#74664B] p-2">
                        {store.type.includes("Software Development") ? (
                          <BsFileEarmarkCodeFill className="text-2xl text-[#e0dbbc]" />
                        ) : (
                          <BsFillClipboardDataFill className="text-2xl text-[#e0dbbc]" />
                        )}
                      </div>
                      <h1 className="font-bokuteh text-3xl text-[#74664B]">
                        {store.name}
                      </h1>
                    </div>
                    <IoExitOutline
                      className="rounded-lg text-4xl text-[#74664B] hover:cursor-pointer hover:bg-[#c3b9a3] md:hidden"
                      onClick={() => setProject({})}
                    />
                  </div>
                  <hr
                    className="w-full border border-dashed border-[#74664B] text-black"
                    id="dashline"
                  ></hr>
                </div>

                <div className="flex w-full justify-between">
                  <h1 className="font-bokuteh italic text-[#74664B]">
                    {store.type}
                  </h1>
                  <h1 className="font-bokuteh italic text-[#74664B]">
                    {store.date}
                  </h1>
                </div>
                {/* END HEADER */}

                {/* BEGIN DESCRIPTION */}
                <div
                  className="flex w-full flex-1 flex-col gap-2 overflow-y-auto rounded-xl bg-[#dcd3aa] p-4"
                  id="scrolldescription"
                >
                  <div className="flex flex-wrap gap-3">
                    {store.languages.map((item) => (
                      <div className="rounded-full border border-[#74664B] bg-[#f2f5de] px-2 py-1 font-seurat text-xs text-[#74664B]">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="font-seurat text-[#74664B]">
                    {store.description}
                  </div>
                </div>
                {/* END DESCRIPTION */}

                {/* BEGIN LINKS */}
                <div className="flex gap-4">
                  <a
                    className="group flex items-center justify-center gap-2 rounded-full bg-[#f2f5de] px-2 py-2 font-seurat text-xl font-light text-[#74664B] hover:cursor-pointer hover:bg-[#dde5a8] hover:text-[#91805e]"
                    href={store.githubURL}
                    target="_blank"
                  >
                    <FaGithub className="rounded-full bg-[#74664B] p-2 text-3xl text-[#f2f5de] group-hover:bg-[#91805e] group-hover:text-[#dde5a8]" />
                    Github
                  </a>
                  {store.type.includes("Software Development") ? (
                    <a
                      className="group flex items-center justify-center gap-2 rounded-full bg-[#f2f5de] px-2 py-2 font-seurat text-xl font-light text-[#74664B] hover:cursor-pointer hover:bg-[#dde5a8] hover:text-[#91805e]"
                      href={store.demoURL}
                      target="_blank"
                    >
                      <FaScrewdriverWrench className="rounded-full bg-[#74664B] p-2 text-3xl text-[#f2f5de] group-hover:bg-[#91805e] group-hover:text-[#dde5a8]" />
                      Demo
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                {/* END LINKS */}
              </motion.div>
            </AnimatePresence>
          ) : (
            <h1 className="col-span-11 w-full text-center font-bokuteh text-xl text-[#74664B] md:col-span-4">
              Click on an image to view its full description!
            </h1>
          )}
          {/* END RIGHT SIDE */}
        </div>
      </section>
    </>
  );
}
