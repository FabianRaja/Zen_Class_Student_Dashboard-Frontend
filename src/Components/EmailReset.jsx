import { useContext, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../Helpers/helper";
import { AppCtx } from "../Context/AppContext";
import { passwordChangeSchema } from "../Helpers/Schema";
import { useFormik } from "formik";

export default function EmailReset(){
    const {msg,setMsg,loading,setLoading}=useContext(AppCtx);
    const params=useParams();
    const id=params.id;
    const navigate=useNavigate();
    useEffect(()=>{
        setMsg("")
    },[])

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            password:"",
        },
        validationSchema:passwordChangeSchema,
        onSubmit:(obj)=>{
            const data={password:values.password}
            setLoading(true);
            resetPassword(id,data).then((result)=>{
                if(result.message==="Password Reset successfull"){
                        setLoading(false);
                        setMsg(result.message);
                        setTimeout(()=>{
                            navigate("/");
                        },3000)
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
                <div className="form-floating mb-3">
                <input type="password" className="form-control login-email" id="floatingInput" placeholder="name@example.com"
                value={values.password} onChange={handleChange} name="password" onBlur={handleBlur}
                />
                <label name="floatingInput">Password</label>
                {touched.password && errors.password?(<div className="text-error">{errors.password}</div>):""}
                </div>
                <button type="submit" className="btn btn-primary login-button mb-3">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Change Password"}</button><br/>
                <h3 className="text-heading"><b>{msg?msg:""}</b></h3><br/>
                <h3 className="text-heading"><b>{msg?"Redirecting to Login Page":""}</b></h3>
        </form>
    )
}