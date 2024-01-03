import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function ProfilePage(){
    const {setHeading,userData}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("My Profile");
    },[])
    
    const userDetails=JSON.parse(localStorage.getItem("data"))
    
    return(
        <MainSpace>
            <div className="subject-section">
            <div className="card">
            <div className="card-body profile-section">
                <h5 className="card-title">Name - {userDetails.username}</h5>
                <h5 className="card-title">Email - {userDetails.email}</h5>
                <h5 className="card-title">Batch - B51 WD Tamil</h5>            
            </div>
            </div>
                
            </div>
        </MainSpace>
    )
}