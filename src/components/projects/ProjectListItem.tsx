import { Link } from "react-router-dom";

type Props = {
    id: string;
    name: string;
    skills: string[];
    duration: string;
};

const ProjectListItem = (props: Props) => {
    let skillsText = "";
    props.skills.map((newText) => {
        skillsText = skillsText + ` ${newText},`;
    });

    return (
        <Link to={props.id}>
            <tr className="flex gap-3 overflow-x-hidden py-3 text-sm md:gap-4 md:px-2 md:text-base">
                <td className="w-1/4 min-w-[25%]">{props.name}</td>
                <td className="my-auto line-clamp-1 w-2/4 min-w-[50%]">
                    {skillsText.slice(0, -1)}
                </td>
                <td className="w-1/4 text-right">{props.duration}</td>
            </tr>
        </Link>
    );
};

export default ProjectListItem;
