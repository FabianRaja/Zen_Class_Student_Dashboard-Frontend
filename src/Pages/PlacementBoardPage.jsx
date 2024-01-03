import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import Placement from "../Components/Placement";

export default function PlacementBoardPage(){
    const {setHeading,placement}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Placement Board");
    },[])
    return(
        <MainSpace>
            <div className="subject-section">
                <div className="placement-card-container">
                {placement.message && placement.message.map((value,index)=>(
                   <Placement key={index}
                   studentName={value.studentName}
                   branch={value.branch}
                   companyName={value.companyName}
                   ctc={value.ctc}
                   placedBy={value.placedBy}
                   />
           ))}  
                </div>  
            </div>
        </MainSpace>
    )
}