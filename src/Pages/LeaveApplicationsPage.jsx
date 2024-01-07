import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { leaveSubmission } from "../Helpers/helper";
import { useFormik } from "formik";
import { leaveSchema } from "../Helpers/Schema";

export default function LeaveApplicationsPage(){
    //importing states from the context
    const {msg,setMsg,setHeading,loading,setLoading}=useContext(AppCtx);
    //setting heading value as Leave Applications and msg value as empty when the page is loaded
    useEffect(()=>{
        setHeading("Leave Applications");
        setMsg("")
    },[])
    //getting data from the local storage
    const userDetails=JSON.parse(localStorage.getItem("data"));
    //using formik with validation schema as leaveSchema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            from:"",
            to:"",
            reason:""
        },
        validationSchema:leaveSchema,
        onSubmit:(obj)=>{
            setLoading(true);
            const data={
                token:localStorage.getItem("token"),
                id:userDetails._id,
                email:userDetails.email,
                from:values.from,
                to:values.to,
                reason:values.reason,
            }
            leaveSubmission(data).then((result)=>{
                setLoading(false);
                setMsg(result.message)}).catch((err)=>{
                    setLoading(false)
                    setMsg(result.message)});
        }
    })
    return(
        //leaveapplicationpage component as children for mainspace component
        <MainSpace>
             <div className="subject-section">
             <h5 className="card-title justify-content-center text-center">Number of Applications Submitted - {userDetails.leaves.count}</h5>
             <br/>
                <div className="card">
                <div className="card-body">
                <form className="leave-application-submission-form" onSubmit={handleSubmit}>
                <label >From</label>
                <input type="date" placeholder="Type here" name="from" onBlur={handleBlur} value={values.from} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                {touched.from && errors.from?(<div className="text-error">{errors.from}</div>):""}
                <label >To</label>
                <input type="date" placeholder="Type here" name="to" onBlur={handleBlur}  value={values.to} onChange={handleChange} className="input input-bordered w-full max-w-xs" />  
                {touched.to && errors.to?(<div className="text-error">{errors.to}</div>):""}
                <label >Reason</label>
                <input type="text" placeholder="Reason" name="reason" onBlur={handleBlur}  value={values.reason} onChange={handleChange} className="input input-bordered w-full max-w-xs" />    
                {touched.reason && errors.reason?(<div className="text-error">{errors.reason}</div>):""}
                <label >Confirm the dates and submit the application</label>
                <button className="btn btn-active btn-neutral" type="submit">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Submit"}</button>
                <h3 className="text-heading"><b>{msg?msg:""}</b></h3>
                </form>
                </div>
                </div>
                    
                </div>
        </MainSpace>
    )
}