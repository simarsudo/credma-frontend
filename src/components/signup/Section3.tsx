import * as Form from "@radix-ui/react-form";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import FormWrapper from "../wrappers/FormWrapper";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    signupFormSectionAddSkill,
    signupFormSectionRemoveSkill,
} from "../../store/slices/user";

type Props = { setSection: Dispatch<SetStateAction<number>> };

const Section3 = (props: Props) => {
    const [skill, setSkill] = useState("");
    const skills = useAppSelector((state) => state.User.skills);
    const dispatch = useAppDispatch();

    const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setSection(4);
    };

    const removeSkill = (index: number) => {
        dispatch(signupFormSectionRemoveSkill(index));
    };

    const addSkill = () => {
        if (skill.length > 0) {
            dispatch(signupFormSectionAddSkill(skill));
            setSkill("");
        }
    };

    return (
        <div>
            <FormWrapper>
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
                                    value={skill}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => setSkill(e.target.value)}
                                    className="h-8 w-full text-black md:w-[22rem]"
                                    type="text"
                                    required
                                />
                            </Form.Control>
                            <button
                                type="button"
                                onClick={addSkill}
                                disabled={skill.length === 0}
                                className="max-w-min self-end border-2 px-8 py-1 disabled:cursor-not-allowed"
                            >
                                Add
                            </button>
                        </div>
                    </Form.Field>
                    <div className="p-4">
                        <ul className="flex flex-wrap gap-2">
                            {skills.map((skill, k) => {
                                return (
                                    <div key={k} className="relative">
                                        <li className="rounded border py-2 pl-4 pr-5">
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
                            onClick={() => props.setSection(2)}
                            className="max-w-min self-end whitespace-nowrap border-2 px-4 py-1"
                        >
                            back
                        </button>
                        <button
                            type="submit"
                            className="max-w-min self-end whitespace-nowrap border-2 px-4 py-1"
                        >
                            Create Account
                        </button>
                    </div>
                </Form.Root>
            </FormWrapper>
        </div>
    );
};

export default Section3;
