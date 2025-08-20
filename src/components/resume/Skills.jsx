import useWebStore from "../../store/store";

export default function SkillsComponent({ data }) {
  const setResume = useWebStore((state) => state.setDisplayResume);

  return (
    <>
      <div>
        {data ? (
          <div className="h-full max-w-full overflow-y-auto p-6">
            <div className="relative overflow-y-auto rounded-2xl bg-[#dcd3aa] p-6">
              <div className="flex flex-col gap-4 rounded-xl bg-[#f2eee2] p-6">
                <div>
                  <h1 className="mb-1 font-bokuteh text-lg text-[#74664B]">
                    Spoken Languages
                  </h1>
                  <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#74664B]">
                    {data.languages.map((item) => (
                      <div className="rounded-full bg-[#dcd3aa] px-2 py-0.5">
                        {item.name} ({item.experience})
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="mb-1 font-bokuteh text-lg text-[#74664B]">
                    Programming Languages
                  </h1>
                  <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#74664B]">
                    {data.programmingLanguages.map((item) => (
                      <div className="rounded-full bg-[#dcd3aa] px-2 py-0.5">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="mb-1 font-bokuteh text-lg text-[#74664B]">
                    Frameworks
                  </h1>
                  <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#74664B]">
                    {data.frameworks.map((item) => (
                      <div className="rounded-full bg-[#dcd3aa] px-2 py-0.5">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="mb-1 font-bokuteh text-lg text-[#74664B]">
                    Tools
                  </h1>
                  <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#74664B]">
                    {data.tools.map((item) => (
                      <div className="rounded-full bg-[#dcd3aa] px-2 py-0.5">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="mb-1 font-bokuteh text-lg text-[#74664B]">
                    Interests
                  </h1>
                  <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#74664B]">
                    {data.interests.map((item) => (
                      <div className="rounded-full bg-[#dcd3aa] px-2 py-0.5">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>There are no skills.</h1>
        )}
      </div>
    </>
  );
}
