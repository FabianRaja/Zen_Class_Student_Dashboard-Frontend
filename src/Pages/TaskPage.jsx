import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import Tasks from "../Components/Tasks";

export default function TaskPage(){
    const {setHeading,classData,task,setTask}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("tasks");
        if(classData){
            const data=classData.message?.filter((value,index)=>{
              return value.task
            });
            setTask(data);
        }
    },[])

    return(
        <MainSpace>
         {task && task?.map((value,index)=>(
            <Tasks key={index}
            heading={value.heading}
            taskLink={value.task}
            />
         ))}   
        </MainSpace>
    )
}