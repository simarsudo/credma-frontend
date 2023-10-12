import * as Form from "@radix-ui/react-form";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-neutral-900 p-4 text-white md:p-8">
            <div className="flex w-full flex-col gap-14 border-2 px-2 py-8 md:w-96 md:py-12">
                <Form.Root className="flex h-full flex-col gap-6 p-2">
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
                                className="h-8 w-full text-gray-800"
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
                                className="h-8 w-full text-gray-800"
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
                                className="h-8 w-full text-gray-800"
                                type="password"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Submit asChild>
                        <button className="max-w-min self-end border-2 px-8 py-1">
                            next
                        </button>
                    </Form.Submit>
                </Form.Root>
            </div>
            <Link to="/login" className="mt-2 text-center">
                Already have an account
            </Link>
        </div>
    );
}

export default Signup;
