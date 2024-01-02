import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function ProfilePage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("My Profile");
    })
    
    return(
        <MainSpace>
            <div className="subject-section">
            <div class="card">
            <div class="card-body profile-section">
                <h5 class="card-title">Name - Fabian Raja Fernando</h5>
                <h5 class="card-title">Phone - 9790873004</h5>
                <h5 class="card-title">Email - fabiraja21052002@gmail.com</h5>
                <h5 class="card-title">Batch - B51 WD Tamil</h5>            
            </div>
            </div>
                
            </div>
        </MainSpace>
    )
}