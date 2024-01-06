import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { testimonialSubmission } from "../Helpers/helper";
import { useFormik } from "formik";
import { testimonialSchema } from "../Helpers/Schema";

export default function TestimonialPage(){
    const {msg,setMsg,setHeading,loading,setLoading}=useContext(AppCtx);

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            test1:"",
            test2:"",
            test3:""
        },
        validationSchema:testimonialSchema,
        onSubmit:(obj)=>{
            setLoading(true);
            const data={
                token:localStorage.getItem("token"),
                email:userDetails.email,
                id:userDetails._id,
                photo:values.test1,
                video:values.test2,
                description:values.test3
            }
            testimonialSubmission(data).then((result)=>{
                setLoading(false);
                setMsg(result.message)}).catch((err)=>{
                    setLoading(false)
                    setMsg(result.message)});
        }
    })
    useEffect(()=>{
        setHeading("Testimonial");
        setMsg("");
    },[])
    const userDetails=JSON.parse(localStorage.getItem("data"));

    return(
        <MainSpace>
            <div className="subject-section">
             <h5 className="card-title justify-content-center text-center">Number of Testimonial Submitted - {userDetails.testimonial.count}</h5>
             <br/>
                <div className="card">
                <div className="card-body  card-section">
                <form className="testimonial-submission-form" onSubmit={handleSubmit}>
                <label >Photo</label>
                <input type="url" value={values.test1} name="test1" onChange={handleChange} onBlur={handleBlur} placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                {touched.test1 && errors.test1?(<div className="text-error">{errors.test1}</div>):""}
                <label >Video</label>
                <input type="url" value={values.test2} name="test2" onChange={handleChange} onBlur={handleBlur} placeholder="Video URL" className="input input-bordered w-full max-w-xs" />  
                {touched.test2 && errors.test2?(<div className="text-error">{errors.test2}</div>):""}
                <label >Description</label>
                <input type="text" value={values.test3} name="test3" onChange={handleChange} onBlur={handleBlur} placeholder="Enter the description" className="input input-bordered w-full max-w-xs" />    
                {touched.test3 && errors.test3?(<div className="text-error">{errors.test3}</div>):""}
                <button className="btn btn-active btn-neutral" type="submit">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Submit"}</button>
                <h3 className="text-heading"><b>{msg?msg:""}</b></h3>
                </form>
                </div>
                </div>
                    
                </div>
        </MainSpace>
    )
}