import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function InterviewTasksPage(){
    //importing states form use context
    const {setHeading}=useContext(AppCtx);
    //setting heading value as Interview Task when the page is loaded
    useEffect(()=>{
        setHeading("Interview Task");
    },[])
    //getting data from the local storage
    const userDetails=JSON.parse(localStorage.getItem("data"));

    return(
        //interviewtaskpage component as children for mainspace component
        <MainSpace>
              <div className="subject-section"><h1 className="interview-task-section">{userDetails.interview?userDetails.interview:"Content available after completing Placement preparation"}</h1></div>
        </MainSpace>
    )
}