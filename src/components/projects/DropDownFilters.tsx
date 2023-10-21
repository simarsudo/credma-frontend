import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@heroicons/react/20/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

type selectedPerksType = {
    certificate: boolean;
    stipend: boolean;
    internship: boolean;
};

type Props = {
    selectedField: string;
    setSelectedField: Dispatch<SetStateAction<string>>;
    selectedPerks: selectedPerksType;
    setSelectedPerks: Dispatch<SetStateAction<selectedPerksType>>;
};

const DropDownFilters = (props: Props) => {
    const selectedField = props.selectedField;
    const setSelectedField = props.setSelectedField;
    const selectedPerks = props.selectedPerks;
    const setSelectedPerks = props.setSelectedPerks;

    return (
        <div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="flex items-center justify-center rounded border bg-highlight px-2 py-1 text-black">
                    Filters
                    <AdjustmentsHorizontalIcon className="mx-1 h-5 w-5" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="z-30 mr-4 mt-2 w-48 rounded bg-white p-2 text-black md:mr-0">
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
                                        temp["certificate"] = !temp.certificate;
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
                                        temp["stipend"] = !temp.stipend;
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
                                        temp["internship"] = !temp.internship;
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
    );
};

export default DropDownFilters;
