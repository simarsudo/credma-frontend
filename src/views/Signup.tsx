import { useState } from "react";
import Section1 from "../components/signup/Section1";
import Section2 from "../components/signup/Section2";
import Section3 from "../components/signup/Section3";
import PageWrapper from "../components/wrappers/PageWrapper";

function Signup() {
    const [section, setSection] = useState(1);

    return (
        <PageWrapper>
            {section === 1 && <Section1 setSection={setSection} />}
            {section === 2 && <Section2 setSection={setSection} />}
            {section === 3 && <Section3 setSection={setSection} />}
        </PageWrapper>
    );
}

export default Signup;
