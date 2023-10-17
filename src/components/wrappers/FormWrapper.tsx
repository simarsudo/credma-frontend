import React from "react";

type Props = {
    children: React.ReactNode;
};

const FormWrapper = (props: Props) => {
    return (
        <div className="flex flex-col gap-14 rounded-md border border-base/25 bg-black px-2 py-8 md:w-[28rem] md:max-w-fit md:px-4 md:py-16">
            {props.children}
        </div>
    );
};

export default FormWrapper;
