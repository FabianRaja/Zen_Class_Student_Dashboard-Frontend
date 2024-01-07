import { useContext, useEffect } from "react"
import { forgotUser } from "../Helpers/helper";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { resetSchema } from "../Helpers/Schema";

export default function ForgotPassword(){
    //importing states from context
    const {msg,setMsg,loading,setLoading}=useContext(AppCtx);
    //msg values will be empty when the page is loaded
    useEffect(()=>{
        setMsg("")
    },[])

    //using formik with resetSchema as validation schema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
        },
        validationSchema:resetSchema,
        onSubmit:(obj)=>{
            setLoading(true);
            const data={email:values.email};
        forgotUser(data).then((result)=>{
                setLoading(false);
                setMsg(result.message);
        }).catch((error)=>{setLoading(false)
            console.log(error)})
        }
    })
    
    return(

        
        <form className="login-email-password-section" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                <input type="email" className="form-control login-email" id="floatingInput" placeholder="name@example.com"
                value={values.email} name="email" onBlur={handleBlur} onChange={handleChange}
                /> 
                <label name="floatingInput">Registered Email</label>
                {touched.email && errors.email?(<div className="text-error">{errors.email}</div>):""}
                </div>
                <button type="submit" className="btn btn-primary login-button mb-3">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Send Mail"}</button><br/>
                <h3 className="text-heading"><b>{msg?msg:""}</b></h3>
        </form>
    )
}