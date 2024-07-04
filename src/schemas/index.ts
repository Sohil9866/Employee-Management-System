import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
    .email("Invalid Email Format")
    .required("Please enter your email"),
    password: Yup.string()
    .required("Must be of 8 words")
})

export const SignupSchema = Yup.object({
    email: Yup.string()
    .email("Invalid Email Format")
    .required("Please enter your email"),
    password: Yup.string()
    .required("Must be of 8 words"),
    firstname: Yup.string()
    .required("Required"),
    lastname: Yup.string()
    .required("Required"),
    department: Yup.string()
    .required("Required")
});
