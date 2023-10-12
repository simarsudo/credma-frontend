import { useAppSelector } from "../store/hooks";

function Index() {
    const name = useAppSelector((state) => state.Products.name);

    return (
        <div className="flex h-full w-full items-center justify-center">
            <p className="flex bg-rose-600">Index Page {name}</p>
        </div>
    );
}

export default Index;
