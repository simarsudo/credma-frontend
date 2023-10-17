import Navbar from "../common/Navbar";

type Props = {
    children: React.ReactNode;
};

const PageWrapper = (props: Props) => {
    return (
        <div className="bg-neutral-900 flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-black p-4 text-white md:p-8">
            <Navbar />
            {props.children}
        </div>
    );
};

export default PageWrapper;
