import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { leaveSubmission } from "../Helpers/helper";

export default function LeaveApplicationsPage(){
    const {msg,setMsg,setHeading,from,setFrom,to,setTo,reason,setReason}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Leave Applications");
        setFrom(""),
        setTo(""),
        setReason(""),
        setMsg("")
    },[])
    
    const userDetails=JSON.parse(localStorage.getItem("data"));

    function handleSubmit(){
        const data={
            id:userDetails._id,
            email:userDetails.email,
            from,
            to,
            reason,
        }
        leaveSubmission(data).then((result)=>setMsg(result.message)).catch((err)=>setMsg(result.message));
    }
    return(
        <MainSpace>
             <div className="subject-section">
             <h5 className="card-title justify-content-center">Number of Applications Submitted - {userDetails.leaves.count}</h5>
             <br/>
                <div className="card">
                <div className="card-body">
                <form className="leave-application-submission-form" onSubmit={(event)=>event.preventDefault()}>
                <label >From</label>
                <input type="date" placeholder="Type here" value={from} onChange={(event)=>setFrom(event.target.value)} className="input input-bordered w-full max-w-xs" />
                <label >To</label>
                <input type="date" placeholder="Type here"  value={to} onChange={(event)=>setTo(event.target.value)} className="input input-bordered w-full max-w-xs" />  
                <label >Reason</label>
                <input type="text" placeholder="Reason"  value={reason} onChange={(event)=>setReason(event.target.value)} className="input input-bordered w-full max-w-xs" />    
                <label >Confirm the dates and submit the application</label>
                <button className="btn btn-active btn-neutral" onClick={()=>handleSubmit()}>Submit</button>
                <h1>{msg?msg:""}</h1>
                </form>
                </div>
                </div>
                    
                </div>
        </MainSpace>
    )
}