import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import Requirements from "../Components/Requirements";
export default function RequirementsPage(){

const {setHeading,requirements}=useContext(AppCtx);
useEffect(()=>{
    setHeading("Requirements");
},[])
    return(
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
            
                
            </div>
        </MainSpace>
    )
}