import { useState } from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DropDownFilters from "../components/projects/DropDownFilters";

type Props = {};

function Projects({}: Props) {
    const [selectedField, setSelectedField] = useState("");
    const [selectedPerks, setSelectedPerks] = useState({
        certificate: false,
        stipend: false,
        internship: false,
    });

    return (
        <PageWrapper>
            <div className="flex h-full w-full grow flex-col items-center gap-2 pt-4 md:m-auto md:w-[40rem] md:pt-0">
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
                <div className="h-full w-full grow border p-1">
                    <div>
                        <p>Project Name</p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Projects;
