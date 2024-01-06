import React, { createContext, useEffect, useState } from "react";
import { getClassData, getPlacementsData, getRequirementsData } from "../Helpers/helper";
export const AppCtx=createContext(null);

export default function AppContext({children}){
    const [msg,setMsg]=useState("");
    const [heading,setHeading]=useState("Class");
    const [classData,setClassData]=useState("");
    const [currentData,setCurrentData]=useState("");
    const [task,setTask]=useState([]);
    const [requirements,setRequirements]=useState([]);
    const [placement,setPlacement]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        getClassData().then((result)=>setClassData(result)).catch((err)=>console.log("error getting class data"));
        getRequirementsData().then((result)=>setRequirements(result)).catch((err)=>console.log("error getting requirements data"));
        getPlacementsData().then((result)=>setPlacement(result)).catch((err)=>console.log("error getting placement data"))
    },[])
    return(
        <AppCtx.Provider value={
            {   
                msg,setMsg,
                heading,setHeading,
                classData,
                currentData,setCurrentData,
                task,setTask,
                requirements,
                placement,
                loading,setLoading,
                
            }}>{children}</AppCtx.Provider>
    )
}