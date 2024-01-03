import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";


export default function ApplicationsPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("My Applications");
    },[])
    
    const userDetails=JSON.parse(localStorage.getItem("data"));

    return(
        <MainSpace>
            <div className="subject-section"><h1 className="application-section">{userDetails.application?userDetails.application:"Content available after completing Placement preparation"}</h1></div>
        </MainSpace>
    )
}