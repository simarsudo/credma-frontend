import { useState } from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DropDownFilters from "../components/projects/DropDownFilters";
import ProjectListItem from "../components/projects/ProjectListItem";

type Props = {};

function Projects({}: Props) {
    const [selectedField, setSelectedField] = useState("");
    const [selectedPerks, setSelectedPerks] = useState({
        certificate: false,
        stipend: false,
        internship: false,
    });

    const tempData = [
        {
            name: "Web App",
            duration: "1 Month",
            skills: ["Web Development", "Frontend", "Backend", "React"],
        },
        {
            name: "Mobile App",
            duration: "15 Days",
            skills: ["Java", "Kotlin", "Swift"],
        },
        {
            name: "Artificial Intelligence",
            duration: "3 Month",
            skills: ["Python", "PyTorch"],
        },
    ];

    return (
        <PageWrapper>
            <div className="flex h-full w-full grow flex-col items-center gap-2 pt-4 md:m-auto md:w-[46rem] md:pt-0">
                <div className="flex w-full justify-between gap-4">
                    <div className="flex items-center md:justify-center">
                        <input
                            className="h-8 w-3/4 md:w-auto"
                            placeholder="Search"
                            type="text"
                            name="Search"
                            id="Search"
                        />
                        <MagnifyingGlassIcon className="mx-1 h-5 w-5 hover:cursor-pointer" />
                    </div>
                    <DropDownFilters
                        selectedField={selectedField}
                        selectedPerks={selectedPerks}
                        setSelectedField={setSelectedField}
                        setSelectedPerks={setSelectedPerks}
                    />
                </div>
                <div className="mt-1 h-full max-h-[calc(100vh-11rem)] w-full grow overflow-y-scroll border-y border-base/25">
                    <table className="w-full table-fixed">
                        <thead className="sticky top-0 z-10 w-full bg-black">
                            <tr className="flex justify-between border-y py-1 text-white/80">
                                <th className="font-semibold">Name</th>
                                <th className="font-semibold">Skills</th>
                                <th className="font-semibold">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="w-full grow divide-y divide-base/10 text-white">
                            {tempData.map((data, k) => {
                                return (
                                    <ProjectListItem
                                        key={k}
                                        id={`${k}`}
                                        name={data.name}
                                        duration={data.duration}
                                        skills={data.skills}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Projects;
