import * as Form from "@radix-ui/react-form";
import { Link } from "react-router-dom";
import PageWrapper from "../components/wrappers/PageWrapper";
import FormWrapper from "../components/wrappers/FormWrapper";

function Login() {
    return (
        <PageWrapper>
            <div className="flex w-full grow flex-col items-center justify-center py-2">
                <FormWrapper>
                    <div className="flex flex-col gap-16">
                        <h1 className="text-center text-4xl font-semibold">
                            Welcome Back
                        </h1>
                        <Form.Root className="flex h-full flex-col gap-6 p-2">
                            <Form.Field
                                className="flex flex-col gap-1"
                                name="email"
                            >
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
                                        className="text-gray-800 h-8 w-full md:w-[22rem]"
                                        type="email"
                                        required
                                    />
                                </Form.Control>
                            </Form.Field>
                            <Form.Field
                                className="flex flex-col gap-1"
                                name="password"
                            >
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
                                        className="text-gray-800 h-8 w-full md:w-[22rem]"
                                        type="password"
                                        required
                                    />
                                </Form.Control>
                            </Form.Field>
                            <div className="flex items-center justify-between">
                                <p>Forget Password</p>
                                <Form.Submit asChild>
                                    <button className="max-w-min self-end border-2 px-8 py-1">
                                        Login
                                    </button>
                                </Form.Submit>
                            </div>
                        </Form.Root>
                    </div>
                </FormWrapper>
                <Link to="/signup" className="mt-2 text-center">
                    Don't have an account?
                </Link>
            </div>
        </PageWrapper>
    );
}

export default Login;
