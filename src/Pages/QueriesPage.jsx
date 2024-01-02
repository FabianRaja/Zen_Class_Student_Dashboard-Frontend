import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function QueriesPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("My Queries");
    })
    
    return(
        <MainSpace>
            <div className="subject-section ">
            <form className="query-submission-form">
                           <h1 className="text-xl text-center">Topic</h1>
                             <div class="form-floating w-full max-w-xs">
                            <select class="form-select " id="floatingSelect" aria-label="Floating label select example">
                                <option selected>--Select Category--</option>
                                <option value="1">Zen-Class Doubt</option>
                                <option value="2">Placement Related</option>
                                <option value="3">Coordination Related</option>
                                <option value="4">Bootcamp Related</option>
                            </select>
                            <label for="floatingSelect">Category</label>
                            </div>
                            <div class="form-floating w-full max-w-xs">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>--Select Sub Category--</option>
                                <option value="1">Task</option>
                                <option value="2">WebCode</option>
                                <option value="3">Class Topic</option>
                                <option value="4">Webkata</option>
                                <option value="4">Codekata</option>
                                <option value="4">Assessment</option>
                            </select>
                            <label for="floatingSelect">Subcategory</label>
                            </div>
                            <div class="form-floating w-full max-w-xs">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>--Select Language--</option>
                                <option value="1">English</option>
                                <option value="2">Tamil</option>
                                <option value="3">Hindhi</option>
                            </select>
                            <label for="floatingSelect">Preferred Voice Communication Language</label>
                            </div>
                            <h1 className="text-xl text-center">Details</h1>
                    <input type="text" placeholder="Query Title" className="input input-bordered w-full max-w-xs  text-center" />  
                    <input type="text" placeholder="Query Description" className="input input-bordered w-full max-w-xs  text-center" />    
                    <h1 className="text-xl text-center">Your available Time? (Ours: 9.00 AM - 7.00 PM)</h1>
                    <input type="time"  className="input input-bordered w-full max-w-xs  text-center" />  
                    <input type="time"  className="input input-bordered w-full max-w-xs  text-center" />  
                    <h1 className="text-xl text-center">Attachments(Optional)</h1>
                    <input type="file"  className="input input-bordered w-full max-w-xs file-section " /> 
                    <button className="btn btn-active btn-neutral">Create Query</button>
                    <br/><br/><br/><br/>
            </form>
           
            </div>
        </MainSpace>
    )
}