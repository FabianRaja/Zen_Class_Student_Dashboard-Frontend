import React, { createContext, useEffect, useState } from "react";
import { getClassData } from "../Helpers/helper";
export const AppCtx=createContext(null);

export default function AppContext({children}){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const [heading,setHeading]=useState("Class");
    const [classData,setClassData]=useState("");
    const [currentData,setCurrentData]=useState("");
    const [task,setTask]=useState([]);

    useEffect(()=>{
        getClassData().then((result)=>setClassData(result)).catch((err)=>console.log("error getting data"))
    },[])
    
    return(
        <AppCtx.Provider value={{email,setEmail,password,setPassword,msg,setMsg,heading,setHeading,classData,currentData,setCurrentData,task,setTask}}>{children}</AppCtx.Provider>
    )
}