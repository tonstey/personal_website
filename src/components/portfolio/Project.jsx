import useWebStore from "../../store/store.jsx";

export default function Project({ projectInfo }) {
  const store = useWebStore((state) => state.setDisplayProject);
  const project = useWebStore((state) => state.displayProject);

  return (
    <>
      <div
        className={`relative flex h-fit w-fit items-center justify-center rounded-3xl bg-[#f4efdf] p-2 shadow-lg shadow-stone-500 transition-transform duration-300 ${project.name === projectInfo.name ? "scale-110" : "hover:scale-105"}`}
        onClick={() => store(projectInfo)}
      >
        <img
          className={`h-60 w-60 rounded-3xl border border-[#e9deb0] hover:cursor-pointer`}
          src={projectInfo.imageURL || "project_images/noimg.jpg"}
          alt="img"
        />
        <div
          className="absolute left-4 top-5 rounded-full bg-[#e9deb0] px-2 py-1 text-sm font-semibold text-[#74664B] hover:cursor-pointer"
          onClick={() => store(projectInfo)}
        >
          {projectInfo.inProgress ? "In Progress" : "Completed"}
        </div>
      </div>
    </>
  );
}
