import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

type User = {
    email: string;
    password: string;
    name: string;
    collegeName: string;
    courseName: string;
    field: string;
    skills: string[];
};

const initialState: User = {
    name: "",
    collegeName: "",
    email: "",
    field: "",
    courseName: "",
    password: "",
    skills: [],
};

export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        signupFormSection2Reducer: (
            state,
            action: PayloadAction<{
                name: string;
                collegeName: string;
                courseName: string;
                field: string;
            }>,
        ) => {
            state.name = action.payload.name;
            state.collegeName = action.payload.collegeName;
            state.courseName = action.payload.courseName;
            state.field = action.payload.field;
        },
        signupFormSectionAddSkill: (state, action: PayloadAction<string>) => {
            state.skills.push(action.payload);
        },
    },
});

export const { signupFormSection2Reducer, signupFormSectionAddSkill } =
    UserSlice.actions;

export default UserSlice.reducer;
