export default function ExperienceComponent({ data }) {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center p-6">
        {data.length > 0 ? (
          <div className="h-full max-w-full overflow-hidden p-6">
            <div className="flex flex-col gap-4 overflow-y-auto rounded-2xl bg-[#dcd3aa] p-6 py-24">
              {data
                .slice()
                .reverse()
                .map((experience) => (
                  <div></div>
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
