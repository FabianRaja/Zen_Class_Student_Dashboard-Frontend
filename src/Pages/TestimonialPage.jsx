import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { testimonialSubmission } from "../Helpers/helper";

export default function TestimonialPage(){
    const {msg,setMsg,setHeading,test1,test2,test3,setTest1,setTest2,setTest3}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Testimonial");
        setTest1("");
        setTest2("");
        setTest3("");
        setMsg("");
    },[])
    const userDetails=JSON.parse(localStorage.getItem("data"));

    function handleSubmit(){
        const data={
            id:userDetails._id,
            photo:test1,
            video:test2,
            description:test3
        }
        testimonialSubmission(data).then((result)=>setMsg(result.message)).catch((err)=>setMsg(result.message));
    }
    return(
        <MainSpace>
            <div className="subject-section">
             <h5 className="card-title justify-content-center">Number of Testimonial Submitted - {userDetails.testimonial.count}</h5>
             <br/>
                <div className="card">
                <div className="card-body  card-section">
                <form className="testimonial-submission-form" onSubmit={(event)=>event.preventDefault()}>
                <label >Upload Photo</label>
                <input type="url" value={test1} onChange={(event)=>setTest1(event.target.value)} placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                <label >Video</label>
                <input type="url" value={test2} onChange={(event)=>setTest2(event.target.value)} placeholder="Video URL" className="input input-bordered w-full max-w-xs" />  
                <label >Description</label>
                <input type="text" value={test3} onChange={(event)=>setTest3(event.target.value)} placeholder="Enter the description" className="input input-bordered w-full max-w-xs" />    
                <button className="btn btn-active btn-neutral" onClick={()=>handleSubmit()}>Submit</button>
                <h1 className="text-3xl">{msg?msg:""}</h1>
                </form>
                </div>
                </div>
                    
                </div>
        </MainSpace>
    )
}