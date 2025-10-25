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
            <Tab className={`text-md relative w-[175px] font-semibold`}>
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
            <Tab className={`text-md relative w-[175px] font-semibold`}>
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
          <div className="h-full w-full overflow-hidden p-6">
            <div className="relative flex h-full flex-col gap-4 overflow-y-auto rounded-2xl bg-[#dcd3aa] p-6">
              {experience.map((job) => (
                <div
                  className="flex flex-col gap-4 rounded-xl bg-[#f2eee2] p-6"
                  key={job.role + job.company}
                >
                  <div className="flex flex-wrap justify-between font-bokuteh text-[#74664B]">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-lg">{job.role}</h1>
                      <h1 className="text-md italic">{job.company}</h1>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                      <h1 className="flex items-center gap-1">
                        <MdLocationOn className="text-2xl" />
                        {job.location}
                      </h1>
                      <h1 className="flex items-center gap-1 text-sm italic">
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
                      <div className="text-sm font-semibold text-[#74664B]">
                        {job.tasks.map((task) => (
                          <div>{task}</div>
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
