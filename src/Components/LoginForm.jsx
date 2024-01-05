import { useContext, useEffect } from "react"

import { loginUser } from "../Helpers/helper";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { loginSchema } from "../Helpers/Schema";



export default function LoginForm(){
    const {msg,setMsg,loading,setLoading}=useContext(AppCtx);
    const navigate=useNavigate();
    
   useEffect(()=>{
    setMsg("")
   },[])

   const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
        email:"",
        password:""
    },
    validationSchema:loginSchema,
    onSubmit:(obj)=>{
        const data={
            email:values.email,
            password:values.password
        }
        setLoading(true);
        loginUser(data).then((result)=>{
                if(result.message==="login successful"){
                        setLoading(false);
                        setMsg(result.message)
                        localStorage.setItem("data",JSON.stringify(result.user));
                        localStorage.setItem("token",result.token);
                        navigate("/home");
                }else{
                        setLoading(false);
                        setMsg(result.message);
                }
        }).catch((error)=>{setLoading(false)
            console.log(error)});
    }
})

   
    return(
                <form className="login-email-password-section" onSubmit={handleSubmit}>
                <a className="login-forgot-button" onClick={()=>navigate("/register")}>New User? <b>Register</b></a><br/><br/>
                <div className="form-floating mb-3">
                <input type="email" className="form-control login-email" id="floatingInput" placeholder="name@example.com"
                value={values.email} onBlur={handleBlur} onChange={handleChange} name="email"
                />
                <label name="floatingInput">Email address</label>
                {touched.email && errors.email?(<div className="text-error">{errors.email}</div>):""}
                </div>
                <div className="form-floating mb-3">
                <input type="password" className="form-control login-email" id="floatingPassword" placeholder="Password"
                value={values.password} onBlur={handleBlur} onChange={handleChange} name="password"/>
                <label name="floatingPassword">Password</label>
                {touched.password && errors.password?(<div className="text-error">{errors.password}</div>):""}
                </div>
                <button type="submit" className="btn btn-primary login-button mb-3">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Login"}</button><br/>
                <h3 className="text-heading"><b>{msg?msg:""}</b></h3><br/><br/>
                <a className="login-forgot-button" onClick={()=>navigate("/forgot")}>Forgot Password?</a>
                </form>
    )
}