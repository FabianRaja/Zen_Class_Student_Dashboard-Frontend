import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function TestimonialPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Testimonial");
    },[])
    const userDetails=JSON.parse(localStorage.getItem("data"));
    return(
        <MainSpace>
            <div className="subject-section">
             <h5 className="card-title justify-content-center">Number of Testimonial Submitted - {userDetails.testimonial.count}</h5>
             <br/>
                <div className="card">
                <div className="card-body  card-section">
                <form className="testimonial-submission-form">
                <label >Upload Photo</label>
                <input type="file" placeholder="Click to upload the photo" className="input input-bordered w-full max-w-xs file-section" />
                <label >Video</label>
                <input type="url" placeholder="Video URL" className="input input-bordered w-full max-w-xs" />  
                <label >Description</label>
                <input type="text" placeholder="Enter the description" className="input input-bordered w-full max-w-xs" />    
                <button className="btn btn-active btn-neutral">Submit</button>
                </form>
                </div>
                </div>
                    
                </div>
        </MainSpace>
    )
}