import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { portfolioSubmission } from "../Helpers/helper";
import { useFormik } from "formik";
import { portfolioSchema } from "../Helpers/Schema";
export default function PortfolioPage(){
    const {setHeading,msg,setMsg,loading,setLoading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Portfolio Submission");
        setMsg("");
    },[])
    
    const userDetails=JSON.parse(localStorage.getItem("data"));

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            github:"",
            portfolio:"",
            resume:""
        },
        validationSchema:portfolioSchema,
        onSubmit:(obj)=>{
            setLoading(true);
            const data={
                _id:userDetails._id,
                link:values.portfolio
            }
            portfolioSubmission(data).then((result)=>{
                setLoading(false);
                setMsg(result.message)}).catch((err)=>{
                    setLoading(false);
                    setMsg(result.message)})
        }
    })

    return(
        <MainSpace>
             <div className="subject-section">
                <div className="row portfolio-section">
                    <div className="col-6 ">
                            <div className="hero portfolio-section-1">
                            <div className="hero-content text-center">
                            <div className="max-w-md">
                            <h1 className="text-5xl">Portfolio Review</h1><br/><hr/>
                            <div className="portfolio-review">
                            <h3>Status : {userDetails.portfolio.status?userDetails.portfolio.status:"Not Submitted"}</h3>
                            <h3>Batch : B51 WD Tamil</h3>
                            <h3>Reviewed By: {userDetails.portfolio.reviewed?userDetails.portfolio.reviewed:"Not Submitted"}</h3>
                            <h3>Comment: {userDetails.portfolio.comment?userDetails.portfolio.comment:"Not Submitted"}</h3>
                            <h3 className="text-heading"><b>{msg?msg:""}</b></h3>
                            </div> 
                            </div>
                            </div>
                            </div>
                    </div>
                    {userDetails.portfolio.status!="submitted"?
                    (
                        <div className="col-6 ">
                            <div className="hero portfolio-section-2">
                                
                            <div className="hero-content text-center">
                            <div className="max-w-md">
                            <form className="portfolio-submission-form" onSubmit={handleSubmit}>
                            <label >GitHub URL</label>
                            <input type="url" placeholder="Paste the github url" className="input input-bordered w-full max-w-xs " name="github" onBlur={handleBlur} value={values.github} onChange={handleChange} />
                            {touched.github && errors.github?(<div className="text-error">{errors.github}</div>):""}
                            <label >Portfolio URL</label>
                            <input type="url" placeholder="Paste the portfolio url" className="input input-bordered w-full max-w-xs"  name="portfolio" onBlur={handleBlur} value={values.portfolio} onChange={handleChange} />  
                            {touched.portfolio && errors.portfolio?(<div className="text-error">{errors.portfolio}</div>):""}
                            <label >Resume URL</label>
                            <input type="url" placeholder="Paste the resume url" className="input input-bordered w-full max-w-xs"  name="resume" onBlur={handleBlur} value={values.resume} onChange={handleChange} />    
                            {touched.resume && errors.resume?(<div className="text-error">{errors.resume}</div>):""}
                            <button className="btn btn-active btn-neutral" type="submit">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Submit"}</button>
                            </form><br/>
                            <h3>Note : You Wont be Able to Submit When the Portfolio is under Review or Reviewed</h3>
                            </div>
                            </div>
                            </div>
                    </div>
                    ):<h1 className="col-6 text-center text-4xl mt-40"><b>Submitted for Review</b></h1>
                    }
                    
                </div>
             
             </div>
        </MainSpace>
    )
}