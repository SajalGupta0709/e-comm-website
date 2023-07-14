import * as Yup from "yup";

export const validSchema= Yup.object({
    name:Yup.string().min(5).required("Please enter your name"),
    usernames:Yup.string().min(8).required("Please enter your ID"),
    passwords:Yup.string().min(6).required("Please enter correct password"),
});