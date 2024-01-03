import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function CertificatePage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Certificates");
    },[])
    const userDetails=JSON.parse(localStorage.getItem("data"));
    return(
        <MainSpace>
             <div className="subject-section"><h1 className="certificate-section">{userDetails.certificate?userDetails.certificate:"Your Certificate is not yet Generated"}</h1></div>
        </MainSpace>
    )
}