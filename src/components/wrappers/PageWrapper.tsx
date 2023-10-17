import Navbar from "../common/Navbar";

type Props = {
    children: React.ReactNode;
};

const PageWrapper = (props: Props) => {
    return (
        <div className="bg-neutral-900 mt-12 flex min-h-[calc(100vh-4rem)] w-full flex-col gap-2 bg-black p-4 text-white md:mt-16 md:p-8">
            <Navbar />
            {props.children}
        </div>
    );
};

export default PageWrapper;
