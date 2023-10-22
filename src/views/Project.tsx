import PageWrapper from "../components/wrappers/PageWrapper";
// import { useParams } from "react-router-dom";
import {
    ClockIcon,
    ChevronLeftIcon,
    HashtagIcon,
} from "@heroicons/react/24/outline";
import { BuildingOfficeIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
// import useListToString from "../hooks/useListToString";

const Project = () => {
    // const { id } = useParams();

    const fakeData = {
        name: "Web App",
        companyName: "Affinate Private Ltd.",
        duration: "2 Months",
        perks: "Internship",
        skills: ["Python", "Javascript", "React"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit consequatur, quaerat at neque rem expedita sapiente recusandae excepturi eius aut id sit placeat numquam a minima itaque, aspernatur voluptas.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius laborum nihil saepe, vero amet dicta. Dignissimos corporis sunt aut vitae minus amet fugiat, dolorum quae in! Sequi consequatur amet placeat.
            `,
    };

    // const skills = useListToString(fakeData.skills);

    return (
        <PageWrapper>
            <div className="my-4 flex flex-col items-center justify-center md:my-0">
                <div className="group flex max-w-fit flex-col gap-2 py-2 md:max-w-[47rem] md:py-0">
                    <Link
                        to={"/projects"}
                        className="flex items-center justify-center gap-1 self-start text-base/70 transition-transform hover:-translate-x-1 md:gap-2"
                    >
                        <ChevronLeftIcon className="h-4 w-4" />
                        back
                    </Link>

                    <h4 className="text-3xl font-semibold text-highlight ">
                        {fakeData.name}
                    </h4>
                    <div className="flex max-w-fit flex-col gap-2 border-b-2 border-base/20 py-2 text-base/90">
                        <div className="flex flex-wrap gap-4">
                            <h5 className="flex items-center gap-2">
                                <BuildingOfficeIcon className="h-5 w-5 text-white" />
                                {fakeData.companyName}
                            </h5>
                            <h5 className="flex items-center gap-2">
                                <ClockIcon className="h-5 w-5 text-white" />
                                {fakeData.duration}
                            </h5>
                            <h5 className="flex items-center gap-2">
                                <TrophyIcon className="h-5 w-5 text-white" />
                                {fakeData.perks}
                            </h5>
                        </div>
                    </div>
                    <div className="flex max-w-fit flex-col gap-1 py-2">
                        <div className="flex gap-2">
                            <HashtagIcon className="h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] flex-wrap text-white" />
                            <p className="font-semibold">Skills Required:</p>
                        </div>
                        <ul className="ml-5 flex flex-wrap text-base/90">
                            {fakeData.skills.map((skill, k) => {
                                return (
                                    <li className="ml-5 list-disc" key={k}>
                                        {skill}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <h5 className="mt-6 text-lg font-semibold text-base/90 underline">
                        Description
                    </h5>
                    <p className="p-2 text-justify">{fakeData.description}</p>
                    <button className="self-end rounded bg-highlight px-4 py-2 text-black">
                        Apply
                    </button>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Project;
