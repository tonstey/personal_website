import { useEffect, useState, useRef } from "react";

import {
  MdHome,
  MdPerson,
  MdArticle,
  MdFolder,
  MdEmail,
  MdMusicNote,
  MdMusicOff,
} from "react-icons/md";

const sectionInfo = [
  { url: "/home", id: "home", icon: <MdHome className="text-2xl" /> },
  { url: "/about", id: "about", icon: <MdPerson className="text-2xl" /> },
  {
    url: "/resume",
    id: "resume",
    icon: <MdArticle className="text-2xl" />,
  },
  {
    url: "/projects",
    id: "projects",
    icon: <MdFolder className="text-2xl" />,
  },
  {
    url: "/contact",
    id: "contact",
    icon: <MdEmail className="text-2xl" />,
  },
];

export default function MenuBar() {
  const [enabled, setEnabled] = useState(false);

  const [activeTab, setActiveTab] = useState("home");
  const [focusTabStyle, setFocusTabStyle] = useState({ width: 0, x: 0 });

  const containerRef = useRef(null);
  const tabsRef = useRef([]);

  const isClickScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

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
    const updatePosition = () => {
      const index = sectionInfo.findIndex((item) => item.id === activeTab);
      const tab = tabsRef.current[index];
      const container = containerRef.current;

      if (tab && container) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setFocusTabStyle({
          width: tabRect.width,
          x: tabRect.left - containerRect.left,
        });
      }
    };

    updatePosition();

    const resize = new ResizeObserver(updatePosition);

    if (containerRef.current) {
      resize.observe(containerRef.current);
    }

    window.addEventListener("resize", updatePosition);

    return () => {
      resize.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, [activeTab, sectionInfo]);

  useEffect(() => {
    const sections = sectionInfo
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (item) => {
        if (isClickScrollRef.current) {
          return;
        }

        const visible = item.filter((e) => e.isIntersecting);
        if (visible.length === 0) {
          return;
        }

        const headerOffset = containerRef.current.offsetHeight || 0;

        visible.sort((a, b) => {
          const aDist = Math.abs(a.boundingClientRect.top - headerOffset);
          const bDist = Math.abs(b.boundingClientRect.top - headerOffset);
          return aDist - bDist;
        });
        setActiveTab(visible[0].target.id);
      },
      {
        rootMargin: `-${containerRef.current.offsetHeight || 0}px 0px -60% 0px`,
        threshold: 0,
      },
    );

    sections.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [sectionInfo]);

  return (
    <>
      <div className="fixed z-[70] mt-4 flex w-full justify-center">
        <div
          ref={containerRef}
          className="relative flex w-fit justify-evenly gap-1 rounded-full bg-[#f3f5dd] px-4 py-4 lg:gap-2 lg:px-8"
        >
          <button
            onClick={() => toggleMusic()}
            className={`absolute -left-12 top-1/3 flex h-8 w-12 items-center rounded-full p-1 transition-colors duration-300 md:-left-20 md:top-[20%] md:h-12 md:w-24 md:p-2 lg:-left-28 ${
              enabled ? "bg-[#74664B]" : "bg-[#f4efdf]"
            }`}
          >
            <div
              className={`absolute inset-0 flex items-center px-2 text-xs md:px-3 md:text-2xl ${enabled ? "justify-start text-[#f4efdf]" : "justify-end text-[#74664B]"}`}
            >
              {enabled ? <MdMusicOff /> : <MdMusicNote />}
            </div>

            <span
              className={`h-6 w-6 transform rounded-full shadow-2xl transition-transform duration-300 md:h-8 md:w-8 ${
                enabled
                  ? "translate-x-4 bg-white md:translate-x-12"
                  : "translate-x-0 bg-[#74664B]"
              }`}
            />
          </button>

          <div
            className="absolute bottom-2 left-0 top-2 z-10 rounded-full bg-[#816649] transition-all duration-300"
            style={{
              width: focusTabStyle.width,
              transform: `translateX(${focusTabStyle.x}px)`,
            }}
          />

          {sectionInfo.map((item, i) => (
            <a
              className={`z-20 flex items-center gap-1 px-4 font-semibold text-[#816649] ${activeTab !== item.id ? "rounded-full py-2 hover:cursor-pointer hover:bg-[#e8dccf]" : "text-white"}`}
              ref={(at) => (tabsRef.current[i] = at)}
              onClick={() => {
                isClickScrollRef.current = true;
                setActiveTab(item.id);
                document
                  .getElementById(item.id)
                  .scrollIntoView({ behavior: "smooth" });

                if (scrollTimeoutRef.current) {
                  clearTimeout(scrollTimeoutRef.current);
                }

                scrollTimeoutRef.current = setTimeout(() => {
                  isClickScrollRef.current = false;
                }, 350);
              }}
              key={item.id}
            >
              {item.icon}
              <h1 className="hidden md:block">{item.id}</h1>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
