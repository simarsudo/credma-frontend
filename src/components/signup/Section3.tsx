import * as Form from "@radix-ui/react-form";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";

type Props = { setSection: Dispatch<SetStateAction<number>> };

const Section3 = (props: Props) => {
    const [skills, setSkills] = useState<string[]>([]);
    const skillRef = useRef<HTMLInputElement>(null);

    const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setSection(4);
    };

    const removeSkill = (index: number) => {
        setSkills((prev) => {
            const temp = [...prev];
            temp.splice(index, 1);
            return temp;
        });
    };

    const addSkill = () => {
        if (skillRef.current && skillRef.current.value.length > 0) {
            setSkills((prev) => {
                const temp = [...prev];
                temp.push(skillRef.current!.value);
                return temp;
            });
        }
    };

    return (
        <div>
            <div className="flex w-full flex-col gap-14 border-2 px-2 py-8 md:w-96 md:py-12">
                <Form.Root
                    onSubmit={(e) => onSubmitEvent(e)}
                    className="flex h-full flex-col gap-6 p-2"
                >
                    <h1 className="text-center text-4xl font-semibold">
                        Skills
                    </h1>
                    <Form.Field className="flex flex-col gap-1" name="name">
                        <div className="flex justify-between">
                            <Form.Label>Name of the skill</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter a skill
                            </Form.Message>
                        </div>
                        <div className="flex gap-2">
                            <Form.Control asChild>
                                <input
                                    ref={skillRef}
                                    className="h-9 w-full text-gray-800"
                                    type="text"
                                    required
                                />
                            </Form.Control>
                            <button
                                type="button"
                                onClick={addSkill}
                                disabled={skillRef.current?.value.length === 0}
                                className="max-w-min self-end border-2 px-8 py-1"
                            >
                                Add
                            </button>
                        </div>
                    </Form.Field>
                    <div className="p-4">
                        <ul className="flex flex-wrap gap-2">
                            {skills.map((skill, k) => {
                                return (
                                    <div className="relative">
                                        <li
                                            key={k}
                                            className="rounded border py-2 pl-4 pr-5"
                                        >
                                            {skill}
                                        </li>
                                        <span
                                            onClick={() => removeSkill(k)}
                                            className="absolute right-1 top-0 text-sm hover:cursor-pointer"
                                        >
                                            &#10005;
                                        </span>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex gap-2 self-end">
                        <button
                            className="max-w-min self-end border-2 px-8 py-1"
                            onClick={() => props.setSection(2)}
                            type="button"
                        >
                            back
                        </button>
                        <button className="max-w-min self-end border-2 px-8 py-1">
                            next
                        </button>
                    </div>
                </Form.Root>
            </div>
        </div>
    );
};

export default Section3;