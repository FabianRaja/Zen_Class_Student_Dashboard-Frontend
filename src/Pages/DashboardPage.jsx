import { useContext, useEffect } from "react";
import DateCalendarServerRequest from "../Components/Dashboard";
import { AppCtx } from "../Context/AppContext";

export default function DashboardPage(){
  //importing states from usecontext
  const {setHeading}=useContext(AppCtx);
  //setting heading values as Dashboard
  useEffect(()=>{
    setHeading("Dashboard")
  },[])
  return(
    //importing DateCalendarSeverRequest function
    <DateCalendarServerRequest/>
  )
}