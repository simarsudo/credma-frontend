import { useState } from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@heroicons/react/20/solid";
import {
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Projects({}: Props) {
    const [selectedField, setSelectedField] = useState("");
    const [selectedPerks, setSelectedPerks] = useState({
        certificate: false,
        stipend: false,
        internship: false,
    });

    return (
        <PageWrapper>
            <div className="flex h-full w-full grow flex-col items-center gap-2 pt-4 md:m-auto md:w-[40rem] md:pt-0">
                <div className="flex w-full justify-between gap-4">
                    <div className="flex items-center md:justify-center">
                        <input
                            className="h-8 w-3/4 md:w-auto"
                            placeholder="Search"
                            type="text"
                            name="Search"
                            id="Search"
                        />
                        <MagnifyingGlassIcon className="mx-1 h-5 w-5 hover:cursor-pointer" />
                    </div>
                    <div>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger className="flex items-center justify-center rounded border bg-highlight px-2 py-1 text-black">
                                Filters
                                <AdjustmentsHorizontalIcon className="mx-1 h-5 w-5" />
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="mr-4 mt-2 w-48 rounded bg-white p-2 text-black md:mr-0">
                                    <DropdownMenu.Label className="py-1 text-sm text-black/80">
                                        Field
                                    </DropdownMenu.Label>
                                    <DropdownMenu.RadioGroup
                                        value={selectedField}
                                        onValueChange={setSelectedField}
                                    >
                                        <DropdownMenu.RadioItem
                                            className="flex items-center justify-between px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white"
                                            value="management"
                                        >
                                            <p>Management</p>
                                            <DropdownMenu.ItemIndicator>
                                                <div className="h-2 w-2 rounded-full bg-black"></div>
                                            </DropdownMenu.ItemIndicator>
                                        </DropdownMenu.RadioItem>
                                        <DropdownMenu.RadioItem
                                            className="flex items-center justify-between px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white"
                                            value="it"
                                        >
                                            IT
                                            <DropdownMenu.ItemIndicator>
                                                <div className="h-2 w-2 rounded-full bg-black"></div>
                                            </DropdownMenu.ItemIndicator>
                                        </DropdownMenu.RadioItem>
                                    </DropdownMenu.RadioGroup>

                                    <DropdownMenu.Separator className="my-2 h-[1px] w-full bg-black/25" />

                                    <DropdownMenu.Group>
                                        <DropdownMenu.Label className="py-1 text-sm text-black/80">
                                            Perks
                                        </DropdownMenu.Label>

                                        <DropdownMenu.CheckboxItem
                                            onClick={() => {
                                                setSelectedPerks((prev) => {
                                                    const temp = { ...prev };
                                                    temp["certificate"] =
                                                        !temp.certificate;
                                                    return temp;
                                                });
                                            }}
                                            checked={selectedPerks.certificate}
                                            className="flex items-center justify-between px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white"
                                        >
                                            Certificate
                                            <DropdownMenu.ItemIndicator>
                                                <CheckIcon className="h-5 w-5 text-black" />
                                            </DropdownMenu.ItemIndicator>
                                        </DropdownMenu.CheckboxItem>

                                        <DropdownMenu.CheckboxItem
                                            onClick={() => {
                                                setSelectedPerks((prev) => {
                                                    const temp = { ...prev };
                                                    temp["stipend"] =
                                                        !temp.stipend;
                                                    return temp;
                                                });
                                            }}
                                            checked={selectedPerks.stipend}
                                            className="flex items-center justify-between px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white"
                                        >
                                            Stipend
                                            <DropdownMenu.ItemIndicator>
                                                <CheckIcon className="h-5 w-5 text-black" />
                                            </DropdownMenu.ItemIndicator>
                                        </DropdownMenu.CheckboxItem>

                                        <DropdownMenu.CheckboxItem
                                            onClick={() => {
                                                setSelectedPerks((prev) => {
                                                    const temp = { ...prev };
                                                    temp["internship"] =
                                                        !temp.internship;
                                                    return temp;
                                                });
                                            }}
                                            checked={selectedPerks.internship}
                                            className="flex items-center justify-between px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white"
                                        >
                                            Internship
                                            <DropdownMenu.ItemIndicator>
                                                <CheckIcon className="h-5 w-5 text-black" />
                                            </DropdownMenu.ItemIndicator>
                                        </DropdownMenu.CheckboxItem>
                                    </DropdownMenu.Group>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                </div>
                <div className="h-full w-full grow border p-1">
                    <div>
                        <p>Project Name</p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Projects;
