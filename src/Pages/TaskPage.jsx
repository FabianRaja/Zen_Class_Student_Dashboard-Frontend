import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import Tasks from "../Components/Tasks";

export default function TaskPage(){
    //imported states from the use context
    const {setHeading,classData,task,setTask}=useContext(AppCtx);
    //setting heading value as tasks when the page is loaded
    useEffect(()=>{
        setHeading("tasks");
        //if there is classData filter operation will perform and task value will be setted
        if(classData){
            const data=classData.message?.filter((value,index)=>{
              return value.task
            });
            setTask(data);
        }
    },[])

    return(
        //taskPage component as children for Mainspace component
        <MainSpace>
         {task && task?.map((value,index)=>(
            <Tasks key={index}
            heading={value.heading}
            taskLink={value.task}
            />
         ))}   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </MainSpace>
    )
}