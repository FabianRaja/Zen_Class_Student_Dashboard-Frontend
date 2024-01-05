import * as yup from "yup";

export const loginSchema=yup.object({
    email:yup.string().required("Enter Valid Email"),
    password:yup.string().required("Enter Password"),
})

export const registerSchema=yup.object({
    username:yup.string().required("Enter user name"),
    email:yup.string().required("Enter Valid Email"),
    password:yup.string().required("Enter Password") .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
})

export const resetSchema=yup.object({
    email:yup.string().required("Enter registered Email"),
})

export const passwordChangeSchema=yup.object({
    password:yup.string().required("Enter Password") .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
})

export const testimonialSchema=yup.object({
    test1:yup.string().required("Enter Photo URL"),
    test2:yup.string().required("Enter Video URL"),
    test3:yup.string().required("Enter Description"),
})

export const leaveSchema=yup.object({
    from:yup.date().required("Select From Date"),
    to:yup.date().required("Select To Date"),
    reason:yup.string().required("Enter reason for your leave")
})

export const portfolioSchema=yup.object({
    github:yup.string().required("Enter Github URL"),
    portfolio:yup.string().required("Enter Portfolio URL"),
    resume:yup.string().required("Enter Resume URL")
})

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

export const capstoneSchema=yup.object({
    frontendCode:yup.string().required("Enter Github URL"),
    backendCode:yup.string().required("Enter Portfolio URL"),
    frontendUrl:yup.string().required("Enter Resume URL"),
    backendUrl:yup.string().required("Enter Deployed URL"),
    comments:yup.string().required("Enter Deployed URL")
})

export const taskSchema=yup.object({
    title:yup.string().required("Select the Task Title"),
    frontend:yup.string().required("Enter Front end Source Code"),
    backend:yup.string().required("Enter Back end Source Code"),
    frontendUrl:yup.string().required("Enter Front end Deployed URL"),
    backendUrl:yup.string().required("Enter  Back end Deployed URL"),
    comment:yup.string().required("Enter Comments")
})