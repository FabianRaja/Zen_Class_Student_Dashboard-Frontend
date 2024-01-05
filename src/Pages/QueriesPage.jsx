import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { querySubmission } from "../Helpers/helper";
import { useFormik } from "formik";
import { querySchema } from "../Helpers/Schema";

export default function QueriesPage(){
    const {msg,setMsg,setHeading,loading,setLoading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("My Queries");
        setMsg("")
    },[])

    const userDetails=JSON.parse(localStorage.getItem("data"));

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            category:"",
            subCategory:"",
            voice:"",
            queryTitle:"",
            queryDescription:"",
            from:"",
            to:"",
            file:"",
        },
        validationSchema:querySchema,
        onSubmit:(obj)=>{
            setLoading(true);
            const data={
                email:userDetails.email,
                id:userDetails._id,
                category:values.category,
                subCategory:values.subCategory,
                voice:values.voice,
                queryTitle:values.queryTitle,
                queryDescription:values.queryDescription,
                from:values.from,
                to:values.to,
                file:values.file
            }
            querySubmission(data).then((result)=>{
                setLoading(false)
                setMsg(result.message)}).catch((err)=>{
                    setLoading(false)
                    setMsg(result.message)});
        }
    })
    return(
        <MainSpace>
            <div className="subject-section ">
            <form className="query-submission-form" onSubmit={handleSubmit}>
                           <h1 className="text-xl text-center">Topic</h1>
                             <div className="form-floating w-full max-w-xs">
                            <select className="form-select " id="floatingSelect" name="category" onBlur={handleBlur} value={values.category} onChange={handleChange} aria-label="Floating label select example">
                                <option>--Select Category--</option>
                                <option>Zen-Class Doubt</option>
                                <option>Placement Related</option>
                                <option>Coordination Related</option>
                                <option>Bootcamp Related</option>
                            </select>
                            <label name="floatingSelect">Category</label>
                            {touched.category && errors.category?(<div className="text-error">{errors.category}</div>):""}
                            </div>
                            <div className="form-floating w-full max-w-xs">
                            <select className="form-select" id="floatingSelect" name="subCategory" onBlur={handleBlur} value={values.subCategory} onChange={handleChange} aria-label="Floating label select example">
                                <option>--Select Sub Category--</option>
                                <option>Task</option>
                                <option>WebCode</option>
                                <option>Class Topic</option>
                                <option>Webkata</option>
                                <option>Codekata</option>
                                <option>Assessment</option>
                            </select>
                            <label name="floatingSelect">Subcategory</label>
                            {touched.subCategory && errors.subCategory?(<div className="text-error">{errors.subCategory}</div>):""}
                            </div>
                            <div className="form-floating w-full max-w-xs">
                            <select className="form-select" id="floatingSelect" name="voice" onBlur={handleBlur} value={values.voice} onChange={handleChange} aria-label="Floating label select example">
                                <option >--Select Language--</option>
                                <option >English</option>
                                <option >Tamil</option>
                                <option >Hindhi</option>
                            </select>
                            <label name="floatingSelect">Preferred Voice Communication Language</label>
                            {touched.voice && errors.voice?(<div className="text-error">{errors.voice}</div>):""}
                            </div>
                            <h1 className="text-xl text-center">Details</h1>
                    <input type="text" placeholder="Query Title" name="queryTitle" onBlur={handleBlur} value={values.queryTitle} onChange={handleChange} className="input input-bordered w-full max-w-xs  text-center" />  
                    {touched.queryTitle && errors.queryTitle?(<div className="text-error">{errors.queryTitle}</div>):""}
                    <input type="text" placeholder="Query Description" name="queryDescription" onBlur={handleBlur} value={values.queryDescription} onChange={handleChange} className="input input-bordered w-full max-w-xs  text-center" />    
                    {touched.queryDescription && errors.queryDescription?(<div className="text-error">{errors.queryDescription}</div>):""}
                    <h1 className="text-xl text-center">Your available Time? (Ours: 9.00 AM - 7.00 PM)</h1>
                    <input type="time" name="from" onBlur={handleBlur} value={values.from} onChange={handleChange}  className="input input-bordered w-full max-w-xs  text-center" />  
                    {touched.from && errors.from?(<div className="text-error">{errors.from}</div>):""}
                    <input type="time" name="to" onBlur={handleBlur} value={values.to} onChange={handleChange}  className="input input-bordered w-full max-w-xs  text-center" />  
                    {touched.to && errors.to?(<div className="text-error">{errors.to}</div>):""}
                    <h1 className="text-xl text-center">Attachments</h1>
                    <input type="url" name="file" onBlur={handleBlur} value={values.file} onChange={handleChange} placeholder="Photo URL" className="input input-bordered w-full max-w-xs text-center" /> 
                    {touched.file && errors.file?(<div className="text-error">{errors.file}</div>):""}
                    <button className="btn btn-active btn-neutral" type="submit">{loading===true?(<span className="loading loading-dots loading-md"></span>):"Create Query"}</button>
                    <h3 className="text-heading"><b>{msg?msg:""}</b></h3>
                    <br/><br/><br/><br/>
            </form>
           
            </div>
        </MainSpace>
    )
}