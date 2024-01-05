import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { capstoneSubmission } from "../Helpers/helper";
import { useFormik } from "formik";
import { capstoneSchema } from "../Helpers/Schema";


export default function CapstonePage(){
    const {msg,setMsg,setHeading,loading,setLoading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Capstone");
        setMsg("");
    },[])
    
    const userDetails=JSON.parse(localStorage.getItem("data"));

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            frontendCode:"",
            backendCode:"",
            frontendUrl:"",
            backendUrl:"",
            comments:"",
        },
        validationSchema:capstoneSchema,
        onSubmit:(obj)=>{
            setLoading(true);
            const data={
                id:userDetails._id,
                frontendCode:values.frontendCode,
                backendCode:values.backendCode,
                frontendUrl:values.frontendUrl,
                backendUrl:values.backendUrl,
                comments:values.comments
            }
            capstoneSubmission(data).then((result)=>{
                setLoading(false);
                setMsg(result.message)
            }).catch((err)=>{
                setLoading(false)
                setMsg(result.message)});
        }
    })

    return(
        <MainSpace>
             <div className="subject-section">
             <div className="capstone-section">
             <div className="hero ">
                            <div className="hero-content">
                            <div className="max-w-4xl">
                            <h1 className="text-5xl text-center text-heading">{userDetails?.username}</h1><br/>
                            <h3 className="text-center">(B51 WD2 Tamil - Capstone Project)</h3><br/>
                            <h3  className="text-xl text-center">{userDetails.capstone.title?userDetails.capstone.title:"Title not assigned yet"}</h3><br/>
                            <h3  className="text-xl text-center">Description</h3><br/>
                            <p>To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.</p><br/>
                            <h2 className="text-xl text-center"><b>Task Title</b>: {userDetails.capstone.title?userDetails.capstone.title:"Title not assigned yet"}</h2> <br/>
                            <h2 className="text-xl text-center">Any specifications on the design?</h2> <br/>
                            <ul>
                                <li className=" text-center">Front-end : Reactjs</li>
                                <li className=" text-center">Back-end: Nodejs</li>
                                <li className=" text-center">Database: MongoDB</li><br/>
                                <li className="text-center">Requirements</li><br/>
                                <li  className="text-center">The project should achieve the CODE QUALITY</li>
                                <li  className="text-center">Use fonts/icons if its required in the design.</li>
                                <li  className="text-center">The use of various charts is required in the design.</li>
                                <li  className="text-center">The use of bootstrap/ material CSS is required in the design</li><br/>
                            </ul>
                            <h2 className="text-xl text-center">How do I submit my work?</h2> <br/>
                            <ul>
                                <li  className="text-center">Push all your work files to GitHub in two different repositories as given below</li>
                                <li  className="text-center">Front-end repo name project-name-frontend.</li>
                                <li  className="text-center">Back-end repo name project-name-backend.</li>
                                <li  className="text-center">Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Render(https://render.com/).</li><br/>
                            </ul>
                            <h2 className="text-xl text-center">Any basic hints/links/reference sites to solve?</h2> <br/>
                            <ul>
                                <li  className="text-center">https://getbootstrap.com/docs/4.4/getting-started/introduction/</li>
                                <li  className="text-center">https://www.chartjs.org/</li>
                                <li  className="text-center">https://jwt.io/introduction/</li>
                                <li  className="text-center">https://react-bootstrap.github.io/</li>
                                <li  className="text-center">https://materializecss.com/</li>
                                <li  className="text-center">https://tailwindcss.com/</li>
                                <li  className="text-center">https://expressjs.com/</li>
                            </ul><br/>
                            <h2 className="text-xl text-center">Terms and Conditions?</h2><br/> 
                            <ul  className="text-center">
                                <li>You agree to not share this confidential document with anyone. </li>
                                <li>You agree to open-source your code (it may even look good on your profile). Do not mention our companys name anywhere in the code.</li>
                                <li>We will never use your source code under any circumstances for any commercial purposes; this is just a basic assessment task.</li>
                                <li>For capstone, the use case has to be identified by the developer.NOTE: Any violation of Terms and conditions is strictly prohibited. You are bound to adhere to it.</li>
                            </ul>
                            <br/>
                            <h2 className="text-xl text-center">Submission</h2><br/>
                            {userDetails.capstone.status!="Submitted"?(<form className="capstone-submission-form" onSubmit={handleSubmit}>
                            <input name="frontendCode" onBlur={handleBlur} value={values.frontendCode} onChange={handleChange} type="url" placeholder="Front-end Source code" className="input input-bordered w-full max-w-xs" />
                            {touched.frontendCode && errors.frontendCode?(<div className="text-error">{errors.frontendCode}</div>):""}
                            <input name="backendCode" onBlur={handleBlur} value={values.backendCode} onChange={handleChange} type="url" placeholder="Back-end Source code" className="input input-bordered w-full max-w-xs" />
                            {touched.backendCode && errors.backendCode?(<div className="text-error">{errors.backendCode}</div>):""}
                            <input name="frontendUrl" onBlur={handleBlur} value={values.frontendUrl} onChange={handleChange} type="url" placeholder="Front-end Deployed URL" className="input input-bordered w-full max-w-xs" />
                            {touched.frontendUrl && errors.frontendUrl?(<div className="text-error">{errors.frontendUrl}</div>):""}
                            <input name="backendUrl" onBlur={handleBlur} value={values.backendUrl} onChange={handleChange} type="url" placeholder="Back-end Deployed URL" className="input input-bordered w-full max-w-xs" />
                            {touched.backendUrl && errors.backendUrl?(<div className="text-error">{errors.backendUrl}</div>):""}
                            <input name="comments" onBlur={handleBlur} value={values.comments} onChange={handleChange} type="text" placeholder="Leave your comments here" className="input input-bordered w-full max-w-xs" />
                            {touched.comments && errors.comments?(<div className="text-error">{errors.comments}</div>):""}
                            <button className="btn btn-active btn-neutral" type="submit">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Submit"}</button>
                            </form>):<h2 className="text-xl text-center"><b>Submitted for Review</b></h2>}
                            <br/>
                            <h3 className="text-xl">Warning: 2 mark may be deducted automatically from your total score if your submission is beyond the deadline</h3><br/>
                            <h3 className="text-heading text-center"><b>{msg?msg:""}</b></h3>
                            </div>
                            </div>
             </div>
             </div>
           
           
            </div>
        </MainSpace>
    )
}