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
    const [from,setFrom]=useState("");
    const [to,setTo]=useState("");
    const [reason,setReason]=useState("");
    const [test1,setTest1]=useState("");
    const [test2,setTest2]=useState("");
    const [test3,setTest3]=useState("");
    const [category,setCategory]=useState("");
    const [subCategory,setSubCategory]=useState("");
    const [voice,setVoice]=useState("");
    const [title,setTitle]=useState("");
    const [queryDescription,setQueryDescription]=useState("");
    const [queryFrom,setQueryFrom]=useState("");
    const [queryTo,setQueryTo]=useState("");
    const [attachments,setAttachments]=useState("");
    const [front,setFront]=useState("");
    const [back,setBack]=useState("");
    const [front1,setFront1]=useState("");
    const [back1,setBack1]=useState("");
    const [comments,setComments]=useState("");
    const [taskTitle,setTaskTitle]=useState("");
    const [loading,setLoading]=useState(false);



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
                capstone1,setCapstone1,capstone2,setCapstone2,capstone3,setCapstone3,capstone4,setCapstone4,capstone5,setCapstone5,
                from,setFrom,to,setTo,reason,setReason,
                test1,test2,test3,setTest1,setTest2,setTest3,
                category,setCategory,subCategory,setSubCategory,voice,setVoice,title,setTitle,queryDescription,setQueryDescription,queryFrom,setQueryFrom,queryTo,setQueryTo,attachments,setAttachments,
                front,back,comments,setFront,setBack,setComments,front1,back1,setFront1,setBack1,taskTitle,setTaskTitle,
                loading,setLoading,
              

            }}>{children}</AppCtx.Provider>
    )
}