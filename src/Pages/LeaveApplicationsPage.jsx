import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function LeaveApplicationsPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Leave Applications");
    })
    
    return(
        <MainSpace>
             <div className="subject-section">
             <h5 class="card-title justify-content-center">Number of Applications Submitted - 2</h5>
             <br/>
                <div class="card">
                <div class="card-body">
                <form className="leave-application-submission-form">
                <label >From</label>
                <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label >To</label>
                <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />  
                <label >Reason</label>
                <input type="text" placeholder="Reason" className="input input-bordered w-full max-w-xs" />    
                <label >Confirm the dates and submit the application</label>
                <button className="btn btn-active btn-neutral">Submit</button>
                </form>
                </div>
                </div>
                    
                </div>
        </MainSpace>
    )
}