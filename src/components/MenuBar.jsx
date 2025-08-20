import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useWebStore from "../store/store";

import {
  MdHome,
  MdPerson,
  MdArticle,
  MdFolder,
  MdEmail,
  MdMusicNote,
  MdMusicOff,
} from "react-icons/md";

export default function MenuBar() {
  const urls = ["/", "/about", "/resume", "/portfolio", "/contact"];

  const params = useLocation();
  const url = params.pathname;

  const navigate = useNavigate();
  const project = useWebStore((state) => state.setDisplayProject);
  const resume = useWebStore((state) => state.setDisplayResume);

  const [enabled, setEnabled] = useState(false);

  const toggleMusic = () => {
    const music = document.getElementById("audio");
    if (music.paused && !enabled) {
      music.play().catch((err) => {
        console.log(err);
      });
    } else {
      music.pause();
    }
    setEnabled((self) => !self);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;
      switch (e.key) {
        case "q":
          const prevIndex = urls.indexOf(url) != 0 ? urls.indexOf(url) - 1 : 4;
          navigate(urls[prevIndex]);
          break;
        case "e":
          const nextIndex = urls.indexOf(url) != 4 ? urls.indexOf(url) + 1 : 0;
          navigate(urls[nextIndex]);
          break;
        default:
          break;
      }
    };
    project({});
    resume(null);
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <>
      <div className="relative flex h-28 w-full items-center justify-center py-4">
        <button
          onClick={() => toggleMusic()}
          className={`absolute left-2 flex h-8 w-12 items-center rounded-full p-1 transition-colors duration-300 md:left-10 md:h-12 md:w-24 ${
            enabled ? "bg-[#74664B]" : "bg-[#f4efdf]"
          }`}
        >
          <div
            className={`absolute inset-0 flex items-center px-2 text-xs md:px-3 md:text-2xl ${enabled ? "justify-start text-[#f4efdf]" : "justify-end text-[#74664B]"}`}
          >
            {enabled ? <MdMusicOff /> : <MdMusicNote />}
          </div>

          <span
            className={`h-6 w-6 transform rounded-full shadow-md transition-transform duration-300 md:h-8 md:w-8 ${
              enabled
                ? "translate-x-4 bg-white md:translate-x-12"
                : "translate-x-0 bg-[#74664B]"
            }`}
          />
        </button>

        <div className="relative flex">
          <h1 className="absolute -left-4 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#74664B] font-semibold text-white">
            Q
          </h1>
          <h1 className="absolute -right-4 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#74664B] font-semibold text-white">
            E
          </h1>

          <div className="-mr-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f5dd] md:-mr-5">
            <MdHome
              className={`text-4xl ${url === "/" ? "text-[#dc921a]" : "text-[#b5b19c] hover:cursor-pointer hover:text-[#74664B]"}`}
              onClick={() => navigate("/")}
            />
          </div>
          <div className="-mr-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f5dd] md:-mr-5">
            <MdPerson
              className={`text-4xl ${url === "/about" ? "text-[#dc921a]" : "text-[#b5b19c] hover:cursor-pointer hover:text-[#74664B]"}`}
              onClick={() => navigate("/about")}
            />
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f5dd]">
            <MdArticle
              className={`text-4xl ${url === "/resume" ? "text-[#dc921a]" : "text-[#b5b19c] hover:cursor-pointer hover:text-[#74664B]"}`}
              onClick={() => navigate("/resume")}
            />
          </div>
          <div className="-ml-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f5dd] md:-ml-5">
            <MdFolder
              className={`text-4xl ${url === "/portfolio" ? "text-[#dc921a]" : "text-[#b5b19c] hover:cursor-pointer hover:text-[#74664B]"}`}
              onClick={() => navigate("/portfolio")}
            />
          </div>
          <div className="-ml-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f5dd] md:-ml-5">
            <MdEmail
              className={`text-4xl ${url === "/contact" ? "text-[#dc921a]" : "text-[#b5b19c] hover:cursor-pointer hover:text-[#74664B]"}`}
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
