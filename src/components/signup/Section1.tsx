import { Dispatch, FormEvent, SetStateAction } from "react";
import * as Form from "@radix-ui/react-form";
import { Link } from "react-router-dom";
import FormWrapper from "../wrappers/FormWrapper";

type Props = {
    setSection: Dispatch<SetStateAction<number>>;
};

const Section1 = (props: Props) => {
    const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setSection(2);
    };

    return (
        <div>
            <FormWrapper>
                <Form.Root
                    onSubmit={(e) => onSubmitEvent(e)}
                    className="flex h-full flex-col gap-6 p-2 md:max-w-fit"
                >
                    <h1 className="text-center text-4xl font-semibold">
                        Create Account
                    </h1>
                    <Form.Field className="flex flex-col gap-1" name="email">
                        <div className="flex justify-between">
                            <Form.Label>Email</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your email
                            </Form.Message>
                            <Form.Message match="typeMismatch">
                                Please enter a valid email
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="h-8 w-full text-black md:w-[22rem]"
                                type="email"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="flex flex-col gap-1" name="password">
                        <div className="flex justify-between">
                            <Form.Label>Password</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your password
                            </Form.Message>
                            <Form.Message match="tooShort">
                                Password must be atleast 8 characters
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="h-8 w-full text-black md:w-[22rem]"
                                type="password"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="flex flex-col gap-1" name="password">
                        <div className="flex justify-between">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Message match="patternMismatch">
                                Confirm Password
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="h-8 w-full text-black md:w-[22rem]"
                                type="password"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <button className="max-w-min self-end border-2 px-8 py-1">
                        next
                    </button>
                </Form.Root>
            </FormWrapper>
            <div className="mt-2 text-center">
                <Link to="/login">Already have an account</Link>
            </div>
        </div>
    );
};

export default Section1;
