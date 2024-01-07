import * as yup from "yup";

//for login user form
export const loginSchema=yup.object({
    email:yup.string().required("Enter Valid Email"),
    password:yup.string().required("Enter Password"),
})

//for register user form
export const registerSchema=yup.object({
    username:yup.string().required("Enter user name"),
    email:yup.string().required("Enter Valid Email"),
    password:yup.string().required("Enter Password") .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
})
//for send reset link form
export const resetSchema=yup.object({
    email:yup.string().required("Enter registered Email"),
})
//for password reset form
export const passwordChangeSchema=yup.object({
    password:yup.string().required("Enter Password") .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
})
//for testimonial form
export const testimonialSchema=yup.object({
    test1:yup.string().required("Enter Photo URL"),
    test2:yup.string().required("Enter Video URL"),
    test3:yup.string().required("Enter Description"),
})
//for leave application form
export const leaveSchema=yup.object({
    from:yup.date().required("Select From Date"),
    to:yup.date().required("Select To Date"),
    reason:yup.string().required("Enter reason for your leave")
})
//for portfolio submission form
export const portfolioSchema=yup.object({
    github:yup.string().required("Enter Github URL"),
    portfolio:yup.string().required("Enter Portfolio URL"),
    resume:yup.string().required("Enter Resume URL")
})
//for query submission form
export const querySchema=yup.object({
    category:yup.string().required("Select Any Category"),
    subCategory:yup.string().required("Select Any Sub Category"),
    voice:yup.string().required("Select Preferred Language"),
    queryTitle:yup.string().required("Enter Query Title"),
    queryDescription:yup.string().required("Enter Query Description"),
    from:yup.string().required("Select From Time"),
    to:yup.string().required("Select To Time"),
    file:yup.string().required("Enter Photo URL"),
   
})
//for capstone submission form
export const capstoneSchema=yup.object({
    frontendCode:yup.string().required("Enter Github URL"),
    backendCode:yup.string().required("Enter Portfolio URL"),
    frontendUrl:yup.string().required("Enter Resume URL"),
    backendUrl:yup.string().required("Enter Deployed URL"),
    comments:yup.string().required("Enter Deployed URL")
})
//for task submission form
export const taskSchema=yup.object({
    title:yup.string().required("Select the Task Title"),
    frontend:yup.string().required("Enter Front end Source Code"),
    backend:yup.string().required("Enter Back end Source Code"),
    frontendUrl:yup.string().required("Enter Front end Deployed URL"),
    backendUrl:yup.string().required("Enter  Back end Deployed URL"),
    comment:yup.string().required("Enter Comments")
})