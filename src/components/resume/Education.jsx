import { MdOutlineCalendarMonth, MdLocationOn } from "react-icons/md";
import useWebStore from "../../store/store";

export default function EducationComponent({ data }) {
  const setResume = useWebStore((state) => state.setDisplayResume);

  return (
    <>
      <div>
        {data.length > 0 ? (
          <div className="h-full max-w-full overflow-hidden p-6">
            <div className="relative flex h-full flex-col gap-4 overflow-y-auto rounded-2xl bg-[#dcd3aa] p-6">
              {data
                .slice()
                .reverse()
                .map((school) => (
                  <div className="flex flex-col gap-4 rounded-xl bg-[#f2eee2] p-6">
                    {/* BEGIN SCHOOL INFO */}
                    <div className="flex flex-wrap justify-between font-bokuteh text-[#74664B]">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-lg">{school.name}</h1>
                        <h1 className="text-xs italic">{school.degree}</h1>
                      </div>

                      <div className="flex flex-col items-start md:items-end">
                        <h1 className="text- flex items-center gap-1">
                          <MdLocationOn className="text-2xl" />
                          {school.location}
                        </h1>
                        <h1 className="flex items-center gap-1 text-sm italic">
                          <MdOutlineCalendarMonth className="text-xl" />
                          {school.startDate} - {school.endDate}
                        </h1>
                        <h1 className="text-sm italic">
                          {school.gpa ? `GPA: ${school.gpa}` : ""}
                        </h1>
                      </div>
                    </div>
                    {/* END SCHOOL INFO */}

                    <div className="w-full">
                      <h1 className="mb-1 font-sans font-bold text-[#74664B]">
                        Relevant Coursework:
                      </h1>
                      <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#74664B]">
                        {school.courses.map((course) => (
                          <div className="rounded-full bg-[#dcd3aa] px-2 py-0.5">
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>

                    {school.awards.length > 0 ? (
                      <div>
                        <h1 className="mb-1 font-sans font-bold text-[#74664B]">
                          Awards:
                        </h1>
                        <div className="text-sm font-semibold text-[#74664B]">
                          {school.awards.map((award) => (
                            <div>
                              {award.name} (Received {award.date})
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {school.activities.length > 0 ? (
                      <div>
                        <h1 className="mb-1 font-sans font-bold text-[#74664B]">
                          Activities:
                        </h1>
                        <div className="flex flex-col gap-0.5 text-sm font-semibold text-[#74664B]">
                          {school.activities.map((activity) => (
                            <div>
                              {activity.name} ({activity.date})
                            </div>
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
          <h1>There is no education here</h1>
        )}
      </div>
    </>
  );
}
