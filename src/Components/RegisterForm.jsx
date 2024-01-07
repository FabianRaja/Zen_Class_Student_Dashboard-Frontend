import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Helpers/helper";
import { useFormik } from "formik";
import { registerSchema } from "../Helpers/Schema";

export default function RegisterForm(){
    //imported states using context
    const {msg,setMsg,loading,setLoading}=useContext(AppCtx);

    //msg values will be empty when the page is loaded
    useEffect(()=>{
     setMsg("")
    },[])
 //useNavigate is used to navigate between pages
     const navigate=useNavigate();

     //using formkik with validation schema as register schema
     const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:registerSchema,
        onSubmit:(obj)=>{
            const data={
                username:values.username,
                email:values.email,
                password:values.password
            }
            setLoading(true);
            registerUser(data).then((result)=>{
                if(result.message==="Registration successfull"){
                        setLoading(false);
                        setMsg(result.message);  
                }else{
                        setLoading(false);
                        setMsg(result.message);
                }
            }).catch((err)=>{setLoading(false)
                console.log("error fetching")})
        }
    })
       
    return(
                <form className="login-email-password-section" onSubmit={handleSubmit}>
                <a className="login-forgot-button" onClick={()=>navigate("/")}>Already a User?<b>Login</b></a><br/><br/>
                <div className="form-floating mb-3">
                <input type="text" className="form-control login-email" id="floatingName" placeholder="User Name"
                value={values.username} name="username" onBlur={handleBlur} onChange={handleChange}
                />
                <label name="floatingName">UserName</label>
                {touched.username && errors.username?(<div className="text-error">{errors.username}</div>):""}
                </div>
                <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" name="email" onBlur={handleBlur} placeholder="name@example.com" value={values.email} onChange={handleChange}/>
                <label name="floatingInput">Email address</label>
                {touched.email && errors.email?(<div className="text-error">{errors.email}</div>):""}
                </div>
                <div className="form-floating mb-3">
                <input type="password" className="form-control login-email" name="password" onBlur={handleBlur} id="floatingPassword" placeholder="Password"
                value={values.password} onChange={handleChange}/>
                <label name="floatingPassword">Set Password</label>
                {touched.password && errors.password?(<div className="text-error">{errors.password}</div>):""}
                </div>
                <button type="submit" className="btn btn-primary login-button mb-3">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Register"}</button><br/>
                <h3 className="text-heading"><b>{msg?msg:""}</b></h3><br/><br/>
                </form>
   
    )
}