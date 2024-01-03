export default function Tasks({heading,taskLink}){
    return(
        <div className="subject-section tasks-section">
               
            
        <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item task-section">
                    <h2 className="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       {heading}
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body"><span>Task link: {taskLink}</span><br/><br/>
                  
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
    )
}