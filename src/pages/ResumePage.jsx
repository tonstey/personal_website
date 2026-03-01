import useWebStore from "../store/store";

import ExperienceComponent from "../components/resume/Experience";
import EducationComponent from "../components/resume/Education";
import SkillsComponent from "../components/resume/Skills";
import CertificateComponent from "../components/resume/Certificates";

import { MdOutlineFileDownload } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { FaGraduationCap, FaBriefcase, FaTools, FaAward } from "react-icons/fa";

export default function ResumePage() {
  const resume = useWebStore((state) => state.displayResume);
  const setResume = useWebStore((state) => state.setDisplayResume);

  return (
    <>
      <section className="min-h-[110vh]" id="resume">
        <div className="mt-28 flex h-full w-full flex-1 flex-col items-center px-10 md:px-16">
          <div className="relative h-fit w-full">
            <h1 className="mb-2 text-center font-seurat text-4xl font-bold text-[#74664B]">
              Resume
            </h1>

            {resume ? (
              <IoExitOutline
                className="absolute right-4 top-2 rounded-lg text-4xl text-[#74664B] hover:cursor-pointer hover:bg-[#c3b9a3] md:hidden"
                onClick={() => setResume(null)}
              />
            ) : (
              ""
            )}
          </div>

          <div className="flex h-full w-full items-start justify-center md:px-4">
            {/* BEGIN TABS */}
            <div
              className={`${resume ? "hidden" : "flex flex-col"} mt-8 h-full w-[18rem] gap-5 rounded-2xl md:col-span-3 md:flex md:flex-col md:justify-start`}
            >
              <div className="flex w-full flex-col items-center rounded-2xl border-2 border-[#dcd3aa] bg-[#f3e0c7]">
                <h1
                  className={`flex w-full items-center justify-center gap-4 rounded-xl px-4 py-8 text-center font-seurat text-2xl text-[#74664B] hover:cursor-pointer hover:bg-[#e2d1ab] ${resume == "experience" ? "scale-110 rounded-[1.5rem] bg-[#e2d1ab] shadow-lg transition-all duration-200" : ""}`}
                  onClick={() => setResume("experience")}
                  id="exptab"
                >
                  <FaBriefcase className="text-[1.8rem]" />
                  Experience
                </h1>
                <h1
                  className={`flex w-full items-center justify-center gap-4 rounded-xl py-8 text-center font-seurat text-2xl text-[#74664B] hover:cursor-pointer hover:bg-[#e2d1ab] ${resume == "education" ? "scale-110 rounded-[1.5rem] bg-[#e2d1ab] shadow-lg transition-all duration-200" : ""}`}
                  onClick={() => setResume("education")}
                  id="edutab"
                >
                  <FaGraduationCap className="text-[2.4rem]" />
                  Education
                </h1>
                <h1
                  className={`flex w-full items-center justify-center gap-4 rounded-xl py-8 text-center font-seurat text-2xl text-[#74664B] hover:cursor-pointer hover:bg-[#e2d1ab] ${resume == "skills" ? "scale-110 rounded-[1.5rem] bg-[#e2d1ab] shadow-lg transition-all duration-200" : ""}`}
                  onClick={() => setResume("skills")}
                  id="skilltab"
                >
                  <FaTools className="text-[1.8rem]" />
                  Skills
                </h1>
                <h1
                  className={`flex w-full items-center justify-center gap-4 rounded-xl py-8 text-center font-seurat text-2xl text-[#74664B] hover:cursor-pointer hover:bg-[#e2d1ab] ${resume == "certificates" ? "scale-110 rounded-[1.5rem] bg-[#e2d1ab] shadow-lg transition-all duration-200" : ""}`}
                  onClick={() => setResume("certificates")}
                  id="certificatetab"
                >
                  <FaAward className="text-[1.8rem]" />
                  Certificates
                </h1>
              </div>
              <a
                className="flex w-full items-center justify-center gap-4 rounded-xl bg-[#6b5b47] px-4 py-8 text-center font-seurat text-xl text-white hover:bg-[#89745b]"
                href="TonyVuong_Resume.pdf"
                download={"TonyVuong_Resume"}
              >
                {" "}
                <MdOutlineFileDownload className="text-[2.75rem]" />
                Download Resume
              </a>
            </div>
            {/* END TABS */}
            {/* BEGIN INFO */}
            <div
              className={`${resume ? "flex flex-1" : "hidden"} h-full w-full pb-12 md:col-span-9 md:flex`}
            >
              {(() => {
                switch (resume) {
                  case "experience":
                    return <ExperienceComponent />;
                  case "education":
                    return <EducationComponent />;
                  case "skills":
                    return <SkillsComponent />;
                  case "certificates":
                    return <CertificateComponent />;
                  default:
                    break;
                }
              })()}
            </div>
            {/* END INFO */}
          </div>
        </div>
      </section>
    </>
  );
}
