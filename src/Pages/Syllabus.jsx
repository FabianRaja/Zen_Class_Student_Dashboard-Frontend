import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function SyllabusPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Syllabus");
    },[])
    
    return(
        <MainSpace>
             <div className="subject-section">
                <div className="card">
                <div className="card-body  syllabus-section">
                <table className="table syllabus-section-flex">
                    <thead> 
                        <tr>
                        <th scope="col" >Course</th>
                        <th scope="col">Syllabus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>FSD-MERN</td>
                        <td><a href="src/assets/mern-syllabus.pdf" download="Syllabus.pdf"><b>Download</b></a></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                    
                </div>
        </MainSpace>
    )
}