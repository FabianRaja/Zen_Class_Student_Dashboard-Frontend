import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function InterviewTasksPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Interview Task Submissions");
    },[])
    
    const userDetails=JSON.parse(localStorage.getItem("data"));

    return(
        <MainSpace>
              <div className="subject-section"><h1 className="interview-task-section">{userDetails.interview?userDetails.interview:"Content available after completing Placement preparation"}</h1></div>
        </MainSpace>
    )
}