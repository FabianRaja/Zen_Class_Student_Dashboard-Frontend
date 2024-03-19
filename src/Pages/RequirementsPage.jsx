import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import Requirements from "../Components/Requirements";
export default function RequirementsPage(){
//importing states from the use context
const {setHeading,requirements}=useContext(AppCtx);
//setting heading value as Requirements when the page is loaded
useEffect(()=>{
    setHeading("Requirements");
  
},[])
    return(
        //requirementsPage component as children for Mainspace component
        <MainSpace>
             <div className="subject-section">
            {requirements.message && requirements.message?.map((value,index)=>(
                 <Requirements key={index}
                  name={value.name}
                  website={value.website}
                  deadline={value.deadline}
                  ctc={value.ctc}
                  opening={value.opening}
                  role={value.role}
                  program={value.program}
                  nature={value.nature}
                 />
            ))}
            
            <br/><br/><br/>
            </div>
        </MainSpace>
    )
}