import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function PlacementBoardPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Placement Board");
    })
    
    return(
        <MainSpace>
            
            <div className="subject-section">
            <div class="card placement-section">
            <div class="card-body">
                <div className="row">
                <div className="col">
                <h5>Fabian Raja</h5>
                <h5>FSD-MERN</h5>
                </div>
                <div className="col">
                <img className="placement-png-image" src="https://www.zenclass.in/static/media/user.8d49e377.png"/>
                </div>
                </div><hr/>
                <div className="row">
                <div className="col">
                <h5>Company: Cognizant</h5>
                <h5>Current CTC: 6LPA</h5>
                <h5>Placed Through: Guvi</h5>
                </div>
                </div>
            </div>
            </div>
                
            </div>
        </MainSpace>
    )
}