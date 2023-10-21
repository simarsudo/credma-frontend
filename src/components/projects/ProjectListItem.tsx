import { Link } from "react-router-dom";
import useListToString from "../../hooks/useListToString";

type Props = {
    id: string;
    name: string;
    skills: string[];
    duration: string;
};

const ProjectListItem = (props: Props) => {
    const skillsText = useListToString(props.skills);

    return (
        <tr className="flex gap-3 overflow-x-hidden py-3 text-sm md:gap-4 md:px-2 md:text-base">
            <td className="w-1/4 min-w-[25%]">
                <Link
                    className="underline decoration-highlight underline-offset-4"
                    to={props.id}
                >
                    {props.name}
                </Link>
            </td>
            <td className="my-auto line-clamp-1 w-2/4 min-w-[50%]">
                {skillsText}
            </td>
            <td className="w-1/4 text-right">{props.duration}</td>
        </tr>
    );
};

export default ProjectListItem;
