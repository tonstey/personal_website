import React from "react";

import { Tab, TabGroup, TabList } from "@headlessui/react";
import { motion } from "framer-motion";

import { nonTechJobs, techJobs } from "../../data/experience.js";

import { MdOutlineCalendarMonth, MdLocationOn } from "react-icons/md";

export default function ExperienceComponent() {
  const [tab, setTab] = React.useState(1);
  const [experience, setExperience] = React.useState(nonTechJobs);

  React.useEffect(() => {
    if (tab === 1) {
      setExperience(nonTechJobs);
    } else {
      setExperience(techJobs);
    }
  }, [tab]);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center p-6">
        <TabGroup className="" selectedIndex={tab} onChange={setTab}>
          <TabList className="relative z-0 flex gap-4 rounded-xl bg-[#a18f6e] px-3 py-2">
            <Tab
              className={`lg:text-md relative w-[130px] text-sm font-semibold lg:w-[175px]`}
            >
              {({ selected }) => (
                <button
                  className={`text-md w-full rounded-full px-2 py-1 font-medium transition-colors duration-200 ${
                    selected
                      ? "text-[#74664B]"
                      : "text-white hover:bg-[#877758]"
                  }`}
                >
                  Technical Jobs
                  {selected && (
                    <motion.div
                      layoutId="bubble"
                      className={`absolute inset-0 z-[-1] rounded-l-lg ${selected ? "bg-white" : "hover:bg-[#877758]"} `}
                      transition={{
                        type: "spring",
                        duration: 0.4,
                        bounce: 0.2,
                      }}
                    />
                  )}
                </button>
              )}
            </Tab>
            <Tab
              className={`lg:text-md relative w-[130px] text-sm font-semibold lg:w-[175px]`}
            >
              {({ selected }) => (
                <button
                  className={`text-md w-full rounded-full px-2 py-1 font-medium transition-colors duration-200 ${
                    selected
                      ? "text-[#74664B]"
                      : "text-white hover:bg-[#877758]"
                  }`}
                >
                  Non-Technical Jobs
                  {selected && (
                    <motion.div
                      layoutId="bubble"
                      className="absolute inset-0 z-[-1] rounded-r-lg bg-white"
                      transition={{
                        type: "spring",
                        duration: 0.4,
                        bounce: 0.2,
                      }}
                    />
                  )}
                </button>
              )}
            </Tab>
          </TabList>
        </TabGroup>

        {experience.length > 0 ? (
          <div className="h-full w-full p-2 md:p-6">
            <div className="relative flex h-full flex-col gap-4 rounded-2xl border-2 border-[#dcd3aa] bg-[#f3e0c7] p-6">
              {experience.map((job) => (
                <div
                  className="flex flex-col gap-4 rounded-xl bg-[#f2eee2] p-6"
                  key={job.role + job.company}
                >
                  <div className="flex flex-wrap justify-between font-bokuteh text-[#74664B]">
                    <div className="flex flex-col gap-1">
                      <h1 className="md:text-lg portrait:text-[1.2rem] md:portrait:text-lg">
                        {job.role}
                      </h1>
                      <h1 className="md:text-md md:portrait:text-md italic portrait:text-[0.85rem]">
                        {job.company}
                      </h1>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                      <h1 className="md:text-md md:portrait:text-md flex items-center gap-1 portrait:text-[0.75rem]">
                        <MdLocationOn className="text-2xl" />
                        {job.location}
                      </h1>
                      <h1 className="md:text-md md:portrait:text-md flex items-center gap-1 portrait:text-[0.75rem]">
                        <MdOutlineCalendarMonth className="text-xl" />
                        {job.startDate} - {job.endDate}
                      </h1>
                    </div>
                  </div>

                  {job.tasks.length > 0 ? (
                    <div>
                      <h1 className="mb-1 font-sans font-bold text-[#74664B]">
                        Tasks:
                      </h1>
                      <div className="flex flex-col gap-2 pl-1 text-sm font-semibold text-[#74664B]">
                        {job.tasks.map((task) => (
                          <li>{task}</li>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h1>There is no experience</h1>
        )}
      </div>
    </>
  );
}
