import useWebStore from "../store/store";

import ExperienceComponent from "../components/resume/Experience";
import EducationComponent from "../components/resume/Education";
import SkillsComponent from "../components/resume/Skills";

import { MdOutlineFileDownload } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

export default function ResumePage() {
  const resume = useWebStore((state) => state.displayResume);
  const setResume = useWebStore((state) => state.setDisplayResume);

  return (
    <>
      <section className="flex flex-1 flex-col items-center overflow-y-hidden">
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

        <div className="grid h-full w-full grid-cols-12">
          {/* BEGIN TABS */}
          <div
            className={`${resume ? "hidden" : "col-span-12 flex flex-col justify-center"} h-full items-center gap-5 overflow-y-auto md:col-span-3 md:flex md:flex-col md:justify-start`}
          >
            <h1
              className={`flex w-[90%] items-center justify-center rounded-xl py-8 text-center font-seurat text-3xl text-[#74664B] hover:cursor-pointer hover:bg-[#d7d0a8] ${resume == "experience" ? "bg-gradient-to-r from-[#c6c18e] to-[#d9d4b1] shadow-lg" : ""}`}
              onClick={() => setResume("experience")}
              id="exptab"
            >
              Experience
            </h1>
            <h1
              className={`flex w-[90%] items-center justify-center rounded-xl py-8 text-center font-seurat text-3xl text-[#74664B] hover:cursor-pointer hover:bg-[#d7d0a8] ${resume == "education" ? "bg-gradient-to-r from-[#c6c18e] to-[#d9d4b1] shadow-lg" : ""}`}
              onClick={() => setResume("education")}
              id="edutab"
            >
              Education
            </h1>
            <h1
              className={`flex w-[90%] items-center justify-center rounded-xl py-8 text-center font-seurat text-3xl text-[#74664B] hover:cursor-pointer hover:bg-[#d7d0a8] ${resume == "skills" ? "bg-gradient-to-r from-[#c6c18e] to-[#d9d4b1] shadow-lg" : ""}`}
              onClick={() => setResume("skills")}
              id="skilltab"
            >
              Skills
            </h1>
            <a
              className="flex w-[90%] items-center justify-center gap-6 rounded-xl bg-[#6b5b47] px-4 py-8 text-center font-seurat text-xl text-white hover:bg-[#89745b]"
              href="TonyVuong_Resume.pdf"
              download={"TonyVuong_Resume"}
            >
              {" "}
              <MdOutlineFileDownload className="text-4xl" />
              Download Resume
            </a>
          </div>
          {/* END TABS */}
          {/* BEGIN INFO */}
          <div
            className={`${resume ? "col-span-12 flex" : "hidden"} h-full w-full overflow-y-auto pb-12 md:col-span-9 md:flex`}
          >
            {(() => {
              switch (resume) {
                case "experience":
                  return <ExperienceComponent />;
                case "education":
                  return <EducationComponent />;
                case "skills":
                  return <SkillsComponent />;
                default:
                  break;
              }
            })()}
          </div>
          {/* END INFO */}
        </div>
      </section>
    </>
  );
}
