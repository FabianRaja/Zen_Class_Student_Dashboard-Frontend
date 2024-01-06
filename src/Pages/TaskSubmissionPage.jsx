import MainSpace from "../Components/Mainspace";
import { useContext, useEffect } from "react"
import { AppCtx } from "../Context/AppContext"
import { taskSubmission } from "../Helpers/helper";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { taskSchema } from "../Helpers/Schema";
export default function TaskSubmissionPage(){

      const {msg,setMsg,loading,setLoading}=useContext(AppCtx);

    const userDetails=JSON.parse(localStorage.getItem("data"));
    const navigate=useNavigate();
    useEffect(()=>{
       setMsg("")
    },[])

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            title:"",
            frontend:"",
            backend:"",
            frontendUrl:"",
            backendUrl:"",
            comment:""
        },
        validationSchema:taskSchema,
        onSubmit:(obj)=>{
            const data={
                token:localStorage.getItem("token"),
                email:userDetails.email,
                id:userDetails._id,
                title:values.title,
                frontend:values.frontend,
                backend:values.backend,
                frontendUrl:values.frontendUrl,
                backendUrl:values.backendUrl,
                comment:values.comment
            }
            setLoading(true);
            taskSubmission(data).then((result)=>{
                setLoading(false);
                setMsg(result.message);
                if(result.message==="task submitted"){
                    setTimeout(()=>{
                        navigate("/task");
                    },2000)
                }
              }
                ).catch((err)=>{
                    setLoading(false)
                    setMsg(result.message)});
        }
    })
    return(
        <MainSpace>
            <div className="subject-section">
                <form className="task-submission-form" onSubmit={handleSubmit}>
                
                            <div className="form-floating w-full max-w-xs">
                            <select className="form-select " id="floatingSelect" onBlur={handleBlur} name="title" value={values.title} onChange={handleChange} aria-label="Floating label select example">
                                <option>--Select Category--</option>
                                <option>JavaScript Day-1</option>
                                <option>JavaScript Day-2</option>
                                <option>JavaScript Day-4</option>
                                <option>JavaScript Day-5</option>
                                <option>JavaScript Day-6</option>
                                <option>JavaScript Day-7</option>
                                <option>HTML & CSS Day-5</option>
                                <option>DOM Day-3</option>
                                <option>Async Programming Day-1</option>
                                <option>Async Programming Day-2</option>
                                <option>Async Programming Day-5</option>
                                <option>React Day-2</option>
                                <option>React Day-3</option>
                                <option>React Day-5</option>
                                <option>React Day-6</option>
                                <option>React Day-8</option>
                                <option>React Day-10</option>
                                <option>React Day-11</option>
                                <option>React Day-12</option>
                                <option>Database Day-1</option>
                                <option>Database Day-2</option>
                                <option>Database Day-3</option>
                                <option>Nodejs Day-1</option>
                                <option>Nodejs Day-2</option>
                                <option>Nodejs Day-3</option>
                                <option>Nodejs Day-5</option>
                            </select>
                            <label name="floatingSelect">Category</label>
                            {touched.title && errors.title?(<div className="text-error text-center">{errors.title}</div>):""}
                            </div>
                    
                    <input type="url" name="frontend" onBlur={handleBlur} value={values.frontend} onChange={handleChange} placeholder="Front-end source code" className="input input-bordered w-full max-w-xs testimonial-file" />
                    {touched.frontend && errors.frontend?(<div className="text-error">{errors.frontend}</div>):""}
                    <input type="url" name="backend" onBlur={handleBlur}  value={values.backend} onChange={handleChange} placeholder="Back-end source code" className="input input-bordered w-full max-w-xs" />  
                    {touched.backend && errors.backend?(<div className="text-error">{errors.backend}</div>):""} 
                    <input type="url" name="frontendUrl" onBlur={handleBlur}  value={values.frontendUrl} onChange={handleChange} placeholder="Front-end deployed url" className="input input-bordered w-full max-w-xs testimonial-file" />
                    {touched.frontendUrl && errors.frontendUrl?(<div className="text-error">{errors.frontendUrl}</div>):""}
                    <input type="url" name="backendUrl" onBlur={handleBlur}  value={values.backendUrl} onChange={handleChange} placeholder="Back-end deployed url" className="input input-bordered w-full max-w-xs" />  
                    {touched.backendUrl && errors.backendUrl?(<div className="text-error">{errors.backendUrl}</div>):""}
                    <input type="text" name="comment" onBlur={handleBlur}  value={values.comment} onChange={handleChange} placeholder="Comments" className="input input-bordered w-full max-w-xs" />    
                    {touched.comment && errors.comment?(<div className="text-error">{errors.comment}</div>):""}
                    <button className="btn btn-active btn-neutral" type="submit">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Submit Task"}</button>

                    <h3 className="text-heading"><b>{msg?msg:""}</b></h3>
                    </form>
            </div>
        </MainSpace>
    )
}