import * as Form from "@radix-ui/react-form";
import { Dispatch, FormEvent, SetStateAction } from "react";
import FormWrapper from "../wrappers/FormWrapper";

type Props = { setSection: Dispatch<SetStateAction<number>> };

const Section2 = (props: Props) => {
    const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setSection(3);
    };

    return (
        <div>
            <FormWrapper>
                <Form.Root
                    onSubmit={(e) => onSubmitEvent(e)}
                    className="flex h-full flex-col gap-6 p-2"
                >
                    <h1 className="text-center text-4xl font-semibold">
                        Enter Details
                    </h1>
                    <Form.Field className="flex flex-col gap-1" name="name">
                        <div className="flex justify-between">
                            <Form.Label>Name</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your Name
                            </Form.Message>
                            <Form.Message match="tooShort">
                                Name is 3 character minimuml
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="h-8 w-full text-black md:w-[22rem]"
                                type="text"
                                required
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field className="flex flex-col gap-1" name="college">
                        <div className="flex justify-between">
                            <Form.Label>College Name</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your College name
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="h-8 w-full text-black md:w-[22rem]"
                                type="text"
                                required
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field className="flex flex-col gap-1" name="course">
                        <div className="flex justify-between">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your Course name
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="h-8 w-full text-black md:w-[22rem]"
                                type="text"
                                required
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field className="flex flex-col gap-1" name="field">
                        <div className="flex justify-between">
                            <Form.Label>Field: IT, Management</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your Field
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="h-8 w-full text-black md:w-[22rem]"
                                type="text"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <div className="flex gap-2 self-end">
                        <button
                            className="max-w-min self-end border-2 px-8 py-1"
                            onClick={() => props.setSection(1)}
                            type="button"
                        >
                            back
                        </button>
                        <button className="max-w-min self-end border-2 px-8 py-1">
                            next
                        </button>
                    </div>
                </Form.Root>
            </FormWrapper>
        </div>
    );
};

export default Section2;
