import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function TestimonialPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Testimonial");
    })
    
    return(
        <MainSpace>
            <div className="subject-section">
             <h5 class="card-title justify-content-center">Number of Testimonial Submitted - 2</h5>
             <br/>
                <div class="card">
                <div class="card-body  card-section">
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