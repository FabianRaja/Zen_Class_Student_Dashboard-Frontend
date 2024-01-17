import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
export default function ApplicationsPage(){
    //importing states from context
    const {setHeading}=useContext(AppCtx);
    //setting heading value as My Applications when the page is loaded
    useEffect(()=>{
        setHeading("My Applications");
    },[])
    //getting data values from the local storage 
    const userDetails=JSON.parse(localStorage.getItem("data"));

    return(
        //using application as children for mainspace component
        <MainSpace>
            <div className="subject-section"><h1 className="application-section text-success font-extrabold">{userDetails.application?userDetails.application:"Content available after completing Placement preparation"}</h1></div><br/><br/><br/>
        </MainSpace>
    )
}