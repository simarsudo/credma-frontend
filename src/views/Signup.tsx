import { useState } from "react";
import Section1 from "../components/signup/Section1";
import Section2 from "../components/signup/Section2";

function Signup() {
    const [section, setSection] = useState(1);

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-neutral-900 p-4 text-white md:p-8">
            {section === 1 && <Section1 setSection={setSection} />}
            {section === 2 && <Section2 setSection={setSection} />}
        </div>
    );
}

export default Signup;
