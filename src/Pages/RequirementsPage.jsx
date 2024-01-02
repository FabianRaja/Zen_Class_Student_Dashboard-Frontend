import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
export default function RequirementsPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Requirements");
    })
    
    return(
        <MainSpace>
             <div className="subject-section">
            <div class="card">
            <div class="card-body requirement-section">
                <div className="row justify-content-start">
                <div className="col-3">
                <h5 className="row justify-content-start">Nimap infotech</h5>
                <h5 className="row justify-content-start">https://nimapinfotech.com</h5>
                </div>
                <div className="col-3">
                <h5 className="row justify-content-start">Role: React Js developer</h5>
                <h5 className="row justify-content-start">CTC: 400000</h5>
                </div>
                <div className="col-3">
                <h5 className="row justify-content-start">Nature of Job: Intern-Full time</h5>
                <h5 className="row justify-content-start">Openings: 3</h5>
                </div>
                <div className="col-3">
                <h5 className="row justify-content-start">Deadline: No Deadline</h5>
                <h5 className="row justify-content-start">Program: Full Stack Development</h5>
                </div>
                </div>
            </div>
            </div>
                
            </div>
        </MainSpace>
    )
}