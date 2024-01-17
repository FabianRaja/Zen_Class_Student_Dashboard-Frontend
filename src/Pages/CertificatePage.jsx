import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function CertificatePage(){
    //importing state from context
    const {setHeading}=useContext(AppCtx);
    //setting heading values as Certificates when the page is loaded
    useEffect(()=>{
        setHeading("Certificates");
    },[])
    //getting data from the local storage
    const userDetails=JSON.parse(localStorage.getItem("data"));
    return(
        //certificatePage as children for mainspace component
        <MainSpace>
             <div className="subject-section"><h1 className="certificate-section text-success font-extrabold">{userDetails.certificate?userDetails.certificate:"Your Certificate is not yet Generated"}</h1></div>
             <br/><br/><br/>
        </MainSpace>
    )
}