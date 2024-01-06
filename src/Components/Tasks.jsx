export default function Tasks({heading,taskLink}){  
    
    return(
        <div className="subject-section tasks-section">
               
            
               <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item task-section">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       {heading}
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body"><span>Task link: {taskLink}</span><br/><br/></div>
                    </div>
                </div>
                </div>
                
                
        </div>
    )
}