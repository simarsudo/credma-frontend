import PageWrapper from "../components/wrappers/PageWrapper";
import { useParams } from "react-router-dom";

const Project = () => {
    const { id } = useParams();

    return <PageWrapper>Project {`${id}`} </PageWrapper>;
};

export default Project;
