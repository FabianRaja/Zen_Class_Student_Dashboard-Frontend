import React, { createContext, useState } from "react";
export const AppCtx=createContext(null);

export default function AppContext({children}){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const [heading,setHeading]=useState("Class");
    return(
        <AppCtx.Provider value={{email,setEmail,password,setPassword,msg,setMsg,heading,setHeading}}>{children}</AppCtx.Provider>
    )
}