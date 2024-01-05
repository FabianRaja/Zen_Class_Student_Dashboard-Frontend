import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { querySubmission } from "../Helpers/helper";

export default function QueriesPage(){
    const {msg,setMsg,setHeading,category,setCategory,subCategory,setSubCategory,voice,setVoice,title,setTitle,queryDescription,setQueryDescription,queryFrom,setQueryFrom,queryTo,setQueryTo,attachments,setAttachments}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("My Queries");
        setAttachments(""),
        setCategory(""),
        setSubCategory(""),
        setVoice(""),
        setTitle(""),
        setQueryDescription(""),
        setQueryFrom(""),
        setQueryTo(""),
        setMsg("")
    },[])

    const userDetails=JSON.parse(localStorage.getItem("data"));

    function handleSubmit(){
        const data={
            id:userDetails._id,
            category,
            subCategory,
            voice,
            queryTitle:title,
            queryDescription,
            from:queryFrom,
            to:queryTo,
            file:attachments
        }
        querySubmission(data).then((result)=>setMsg(result.message)).catch((err)=>setMsg(result.message));
    }
    return(
        <MainSpace>
            <div className="subject-section ">
            <form className="query-submission-form" onSubmit={(event)=>event.preventDefault()}>
                           <h1 className="text-xl text-center">Topic</h1>
                             <div className="form-floating w-full max-w-xs">
                            <select className="form-select " id="floatingSelect" value={category} onChange={(event)=>setCategory(event.target.value)} aria-label="Floating label select example">
                                <option>--Select Category--</option>
                                <option>Zen-Class Doubt</option>
                                <option>Placement Related</option>
                                <option>Coordination Related</option>
                                <option>Bootcamp Related</option>
                            </select>
                            <label name="floatingSelect">Category</label>
                            </div>
                            <div className="form-floating w-full max-w-xs">
                            <select className="form-select" id="floatingSelect" value={subCategory} onChange={(event)=>setSubCategory(event.target.value)} aria-label="Floating label select example">
                                <option>--Select Sub Category--</option>
                                <option>Task</option>
                                <option>WebCode</option>
                                <option>Class Topic</option>
                                <option>Webkata</option>
                                <option>Codekata</option>
                                <option>Assessment</option>
                            </select>
                            <label name="floatingSelect">Subcategory</label>
                            </div>
                            <div className="form-floating w-full max-w-xs">
                            <select className="form-select" id="floatingSelect" value={voice} onChange={(event)=>setVoice(event.target.value)} aria-label="Floating label select example">
                                <option >--Select Language--</option>
                                <option >English</option>
                                <option >Tamil</option>
                                <option >Hindhi</option>
                            </select>
                            <label name="floatingSelect">Preferred Voice Communication Language</label>
                            </div>
                            <h1 className="text-xl text-center">Details</h1>
                    <input type="text" placeholder="Query Title" value={title} onChange={(event)=>setTitle(event.target.value)} className="input input-bordered w-full max-w-xs  text-center" />  
                    <input type="text" placeholder="Query Description" value={queryDescription} onChange={(event)=>setQueryDescription(event.target.value)} className="input input-bordered w-full max-w-xs  text-center" />    
                    <h1 className="text-xl text-center">Your available Time? (Ours: 9.00 AM - 7.00 PM)</h1>
                    <input type="time" value={queryFrom} onChange={(event)=>setQueryFrom(event.target.value)}  className="input input-bordered w-full max-w-xs  text-center" />  
                    <input type="time" value={queryTo} onChange={(event)=>setQueryTo(event.target.value)}  className="input input-bordered w-full max-w-xs  text-center" />  
                    <h1 className="text-xl text-center">Attachments</h1>
                    <input type="url" value={attachments} onChange={(event)=>setAttachments(event.target.value)} placeholder="Photo URL" className="input input-bordered w-full max-w-xs text-center" /> 
                    <button className="btn btn-active btn-neutral" onClick={()=>handleSubmit()}>Create Query</button>
                    <h1 className="text-3xl">{msg?msg:""}</h1>
                    <br/><br/><br/><br/>
            </form>
           
            </div>
        </MainSpace>
    )
}