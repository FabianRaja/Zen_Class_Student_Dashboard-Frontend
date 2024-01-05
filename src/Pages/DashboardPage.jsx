import { useContext, useEffect } from "react";
import DateCalendarServerRequest from "../Components/Dashboard";
import { AppCtx } from "../Context/AppContext";

export default function DashboardPage(){

  const {setHeading}=useContext(AppCtx);
  useEffect(()=>{
    setHeading("Dashboard")
  },[])
  return(
    <DateCalendarServerRequest/>
  )
}