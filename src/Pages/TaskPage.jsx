import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function TaskPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Tasks");
    })
    
    return(
        <MainSpace>
            <div className="subject-section">
            <div class="accordion accordion-flush " id="accordionFlushExample">
                <div class="accordion-item task-section">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                       JavaScript Day 1 - Introduction to Browser & web
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"><span>Task link: https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/preview</span><br/><br/>
                  
                    <form className="task-submission-form">
                    
                    <input type="url" placeholder="Front-end source code" className="input input-bordered w-full max-w-xs testimonial-file" />
                 
                    <input type="url" placeholder="Back-end source code" className="input input-bordered w-full max-w-xs" />  
                   
                    <input type="text" placeholder="Comments" className="input input-bordered w-full max-w-xs" />    
                    
                    <button className="btn btn-active btn-neutral">Submit</button>
                    </form>
                    
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
        </MainSpace>
    )
}