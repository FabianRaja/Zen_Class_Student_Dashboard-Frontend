import MainSpace from "../Components/Mainspace";
import { useContext, useEffect } from "react"
import { AppCtx } from "../Context/AppContext"
import { taskSubmission } from "../Helpers/helper";
export default function TaskSubmissionPage(){

      const {msg,setMsg, front,back,comments,setFront,setBack,setComments,front1,back1,setFront1,setBack1,taskTitle,setTaskTitle }=useContext(AppCtx);

    const userDetails=JSON.parse(localStorage.getItem("data"));
    
    useEffect(()=>{
       setMsg(""),
       setFront(""),
       setBack(""),
       setFront1(""),
       setBack1(""),
       setTaskTitle(""),
       setComments("")
    },[])
    function handleSubmit(){
        const data={
            email:userDetails.email,
            id:userDetails._id,
            title:taskTitle,
            frontend:front,
            backend:back,
            frontendUrl:front1,
            backendUrl:back1,
            comment:comments
        }
        taskSubmission(data).then((result)=>setMsg(result.message)).catch((err)=>setMsg(result.message));
    }
    return(
        <MainSpace>
            <div className="subject-section">
                <form className="task-submission-form" onSubmit={(event)=>event.preventDefault()}>
                
                            <div className="form-floating w-full max-w-xs">
                            <select className="form-select " id="floatingSelect" value={taskTitle} onChange={(event)=>setTaskTitle(event.target.value)} aria-label="Floating label select example">
                                <option>--Select Category--</option>
                                <option>JavaScript Day-1</option>
                                <option>JavaScript Day-2</option>
                                <option>JavaScript Day-4</option>
                                <option>JavaScript Day-5</option>
                                <option>JavaScript Day-6</option>
                                <option>JavaScript Day-7</option>
                                <option>HTML & CSS Day-5</option>
                                <option>DOM Day-3</option>
                                <option>Async Programming Day-1</option>
                                <option>Async Programming Day-2</option>
                                <option>Async Programming Day-5</option>
                                <option>React Day-2</option>
                                <option>React Day-3</option>
                                <option>React Day-5</option>
                                <option>React Day-6</option>
                                <option>React Day-8</option>
                                <option>React Day-10</option>
                                <option>React Day-11</option>
                                <option>React Day-12</option>
                                <option>Database Day-1</option>
                                <option>Database Day-2</option>
                                <option>Database Day-3</option>
                                <option>Nodejs Day-1</option>
                                <option>Nodejs Day-2</option>
                                <option>Nodejs Day-3</option>
                                <option>Nodejs Day-5</option>
                            </select>
                            <label name="floatingSelect">Category</label>
                            </div>
                    
                    <input type="url" value={front} onChange={(event)=>setFront(event.target.value)} placeholder="Front-end source code" className="input input-bordered w-full max-w-xs testimonial-file" />
                 
                    <input type="url" value={back} onChange={(event)=>setBack(event.target.value)} placeholder="Back-end source code" className="input input-bordered w-full max-w-xs" />  
                   
                    <input type="url" value={front1} onChange={(event)=>setFront1(event.target.value)} placeholder="Front-end deployed url" className="input input-bordered w-full max-w-xs testimonial-file" />
                 
                    <input type="url" value={back1} onChange={(event)=>setBack1(event.target.value)} placeholder="Back-end deployed url" className="input input-bordered w-full max-w-xs" />  

                    <input type="text" value={comments} onChange={(event)=>setComments(event.target.value)} placeholder="Comments" className="input input-bordered w-full max-w-xs" />    
                    
                    <button className="btn btn-active btn-neutral" onClick={()=>handleSubmit()}>Submit</button>

                    <div className="text-3xl">{msg?msg:""}</div>
                    </form>
            </div>
        </MainSpace>
    )
}