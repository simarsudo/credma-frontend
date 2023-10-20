import * as Form from "@radix-ui/react-form";
import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import FormWrapper from "../wrappers/FormWrapper";
import { signupFormSection2Reducer } from "../../store/slices/user";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type Props = { setSection: Dispatch<SetStateAction<number>> };

const Section2 = (props: Props) => {
    const dispatch = useAppDispatch();
    const nameRef = useRef<HTMLInputElement>(null);
    const collegeNameRef = useRef<HTMLInputElement>(null);
    const courseNameRef = useRef<HTMLInputElement>(null);
    const fieldRef = useRef<HTMLInputElement>(null);
    const userFormData = useAppSelector((state) => state.User);

    const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = nameRef.current?.value;
        const collegeName = collegeNameRef.current?.value;
        const courseName = courseNameRef.current?.value;
        const field = fieldRef.current?.value;

        if (
            name &&
            name.length >= 3 &&
            collegeName &&
            collegeName.length >= 3 &&
            courseName &&
            courseName.length >= 3 &&
            field &&
            field.length >= 2
        ) {
            console.log("rabn");
            dispatch(
                signupFormSection2Reducer({
                    name,
                    collegeName,
                    courseName,
                    field,
                }),
            );
        }

        props.setSection(3);
    };

    return (
        <div>
            <FormWrapper>
                <Form.Root
                    onSubmit={(e) => onSubmitEvent(e)}
                    className="flex h-full max-w-fit flex-col gap-6 p-2"
                >
                    <h1 className="text-center text-4xl font-semibold">
                        Enter Details
                    </h1>
                    <Form.Field className="flex flex-col" name="name">
                        <div className="flex justify-between">
                            <Form.Label>Name</Form.Label>
                        </div>
                        <div>
                            <Form.Control asChild>
                                <input
                                    ref={nameRef}
                                    defaultValue={userFormData.name}
                                    minLength={3}
                                    className="h-8 w-full text-black md:w-[22rem]"
                                    type="text"
                                    required
                                />
                            </Form.Control>
                            <div>
                                <Form.Message match="valueMissing">
                                    <p className="text-warning">
                                        Please enter your Name
                                    </p>
                                </Form.Message>
                                <Form.Message match="tooShort">
                                    <p className="text-warning">
                                        Name should be 3 character minimum
                                    </p>
                                </Form.Message>
                            </div>
                        </div>
                    </Form.Field>

                    <Form.Field className="flex flex-col" name="college">
                        <div className="flex justify-between">
                            <Form.Label>College Name</Form.Label>
                        </div>
                        <div>
                            <Form.Control asChild>
                                <input
                                    ref={collegeNameRef}
                                    defaultValue={userFormData.courseName}
                                    minLength={3}
                                    className="h-8 w-full text-black md:w-[22rem]"
                                    type="text"
                                    required
                                />
                            </Form.Control>
                            <div>
                                <Form.Message match="valueMissing">
                                    <p className="text-warning">
                                        Please enter your College name
                                    </p>
                                </Form.Message>
                                <Form.Message match="tooShort">
                                    <p className="text-warning">
                                        Name should be 3 character minimum
                                    </p>
                                </Form.Message>
                            </div>
                        </div>
                    </Form.Field>

                    <Form.Field className="flex flex-col" name="course">
                        <div className="flex justify-between">
                            <Form.Label>Course Name</Form.Label>
                        </div>
                        <div>
                            <Form.Control asChild>
                                <input
                                    ref={courseNameRef}
                                    defaultValue={userFormData.courseName}
                                    minLength={3}
                                    className="h-8 w-full text-black md:w-[22rem]"
                                    type="text"
                                    required
                                />
                            </Form.Control>
                            <div>
                                <Form.Message match="valueMissing">
                                    <p className="text-warning">
                                        Please enter your Course name
                                    </p>
                                </Form.Message>
                            </div>
                        </div>
                    </Form.Field>

                    <Form.Field className="flex flex-col" name="field">
                        <div className="flex justify-between">
                            <Form.Label>Field: IT, Management</Form.Label>
                        </div>
                        <div>
                            <Form.Control asChild>
                                <input
                                    ref={fieldRef}
                                    defaultValue={userFormData.field}
                                    className="h-8 w-full text-black md:w-[22rem]"
                                    type="text"
                                    required
                                />
                            </Form.Control>
                            <div>
                                <Form.Message match="valueMissing">
                                    <p className="text-warning">
                                        Please enter your Field
                                    </p>
                                </Form.Message>
                            </div>
                        </div>
                    </Form.Field>
                    <div className="flex gap-2 self-end">
                        <button
                            className="max-w-min self-end border-2 px-8 py-1"
                            onClick={() => props.setSection(1)}
                            type="button"
                        >
                            back
                        </button>
                        <button
                            type="submit"
                            className="max-w-min self-end border-2 px-8 py-1"
                        >
                            next
                        </button>
                    </div>
                </Form.Root>
            </FormWrapper>
        </div>
    );
};

export default Section2;
