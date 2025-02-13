import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    fullName: yup.string().required("Full name is required").min(5, "Full name must be at least 6 characters long"),
    email: yup.string().required("Email is required").email("Email must be a valid email address"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
})