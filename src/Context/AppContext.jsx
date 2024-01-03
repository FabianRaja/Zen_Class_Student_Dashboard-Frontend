import React, { createContext, useEffect, useState } from "react";
import { getClassData, getPlacementsData, getRequirementsData } from "../Helpers/helper";
export const AppCtx=createContext(null);

export default function AppContext({children}){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const [heading,setHeading]=useState("Class");
    const [classData,setClassData]=useState("");
    const [currentData,setCurrentData]=useState("");
    const [task,setTask]=useState([]);
    const [requirements,setRequirements]=useState([]);
    const [placement,setPlacement]=useState([]);
    const [portfolio,setPortfolio]=useState("");
    const [capstone1,setCapstone1]=useState("");
    const [capstone2,setCapstone2]=useState("");
    const [capstone3,setCapstone3]=useState("");
    const [capstone4,setCapstone4]=useState("");
    const [capstone5,setCapstone5]=useState("");
    

    useEffect(()=>{
        getClassData().then((result)=>setClassData(result)).catch((err)=>console.log("error getting class data"));
        getRequirementsData().then((result)=>setRequirements(result)).catch((err)=>console.log("error getting requirements data"));
        getPlacementsData().then((result)=>setPlacement(result)).catch((err)=>console.log("error getting placement data"))
    },[])
    
    return(
        <AppCtx.Provider value={
            {   username,setUsername,
                email,setEmail,
                password,setPassword,
                msg,setMsg,
                heading,setHeading,
                classData,
                currentData,setCurrentData,
                task,setTask,
                requirements,
                placement,
                portfolio,setPortfolio,
                capstone1,setCapstone1,capstone2,setCapstone2,capstone3,setCapstone3,capstone4,setCapstone4,capstone5,setCapstone5

            }}>{children}</AppCtx.Provider>
    )
}