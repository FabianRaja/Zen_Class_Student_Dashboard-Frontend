import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
export default function HomePage(){
    //importing states from the context
    const {setHeading,classData,currentData,setCurrentData}=useContext(AppCtx);
    //setting heading value as Class when the page is loaded
    useEffect(()=>{
        setHeading("Class");
        //if there is class data when the page is loaded, will set the classData
        if(classData){
            setCurrentData(classData?.message[0]);
        }
    },[])
    
    return(
        //homepage component as children for Mainspace component
        <MainSpace>
            <div className="subject-section">
            <div className="row subject-section-flex">
                    <div className="col-7 ">
                            <div className="hero profile-section-1">
                            <div className="hero-content text-center">
                            <div className="max-w-md">
                            <h1 className="text-xl">{currentData.heading?currentData.heading:"No contents Available"}</h1>
                            <h3 className="text-xl">{currentData.details?currentData.details:"Switch between roadmaps to view contents"}</h3><br/>
                            <hr/><br/>
                            <h1 className="text-xl">{currentData?"Contents":""}</h1>
                            <h3 className="text-l">{currentData.content1?currentData.content1:""}</h3>
                            <h3 className="text-l">{currentData.content2?currentData.content2:""}</h3>
                            <h3 className="text-l">{currentData.content3?currentData.content3:""} </h3>
                            <h3 className="text-l">{currentData.content4?currentData.content4:""}</h3>
                            <h3 className="text-l">{currentData.content5?currentData.content5:""}</h3>
                            <h3 className="text-l">{currentData.content6?currentData.content6:""}</h3>
                            <h3 className="text-l">{currentData.content7?currentData.content7:""}</h3><br/>
                            <h1 className="text-xl">{currentData.read1?"Pre-read":""}</h1>
                            <p className="text-l">{currentData.read1?currentData.read1:""}</p>
                            <p className="text-l">{currentData.read2?currentData.read2:""}</p>
                            <br/>
                            </div>
                            </div>
                            </div>
                    </div>

            <div className="col-5 subject-section-steps">
            <div className="card">
            <div className="card-body" >
            <h1 className="text-xl text-center">Session Roadmap</h1>
            <hr/>
            <ul className="steps steps-section">
            <li className="step step-primary" data-content="1" onClick={()=>setCurrentData(classData.message[0])}></li>
            <li className="step step-primary" data-content="2" onClick={()=>setCurrentData(classData.message[1])}></li>
            <li className="step step-primary" data-content="3" onClick={()=>setCurrentData(classData.message[2])}></li>
            <li className="step step-primary" data-content="4" onClick={()=>setCurrentData(classData.message[3])}></li>
            <li className="step step-primary" data-content="5" onClick={()=>setCurrentData(classData.message[4])}></li>
            <li className="step step-primary" data-content="6" onClick={()=>setCurrentData(classData.message[5])}></li>
            </ul>
            <ul className="steps steps-section">
            <li className="step step-primary" data-content="12" onClick={()=>setCurrentData(classData.message[11])}></li>
            <li className="step step-primary" data-content="11" onClick={()=>setCurrentData(classData.message[10])}></li>
            <li className="step step-primary" data-content="10" onClick={()=>setCurrentData(classData.message[9])}></li>
            <li className="step step-primary" data-content="9" onClick={()=>setCurrentData(classData.message[8])}></li>
            <li className="step step-primary" data-content="8" onClick={()=>setCurrentData(classData.message[7])}></li>
            <li className="step step-primary" data-content="7" onClick={()=>setCurrentData(classData.message[6])}></li>
            
            </ul>
            <ul className="steps steps-section">
            <li className="step step-primary" data-content="13" onClick={()=>setCurrentData(classData.message[12])}></li>
            <li className="step step-primary" data-content="14" onClick={()=>setCurrentData(classData.message[13])}></li>
            <li className="step step-primary" data-content="15" onClick={()=>setCurrentData(classData.message[14])}></li>
            <li className="step step-primary" data-content="16" onClick={()=>setCurrentData(classData.message[15])}></li>
            <li className="step step-primary" data-content="17" onClick={()=>setCurrentData(classData.message[16])}></li>
            <li className="step step-primary" data-content="18" onClick={()=>setCurrentData(classData.message[17])}></li>
            </ul>
            <ul className="steps steps-section">
            <li className="step step-primary" data-content="24" onClick={()=>setCurrentData(classData.message[23])}></li>
            <li className="step step-primary" data-content="23" onClick={()=>setCurrentData(classData.message[22])}></li>
            <li className="step step-primary" data-content="22" onClick={()=>setCurrentData(classData.message[21])}></li>
            <li className="step step-primary" data-content="21" onClick={()=>setCurrentData(classData.message[20])}></li>
            <li className="step step-primary" data-content="20" onClick={()=>setCurrentData(classData.message[19])}></li>
            <li className="step step-primary" data-content="19" onClick={()=>setCurrentData(classData.message[18])}></li>
            
            </ul>
            <ul className="steps steps-section">
            <li className="step step-primary" data-content="25" onClick={()=>setCurrentData(classData.message[24])}></li>
            <li className="step step-primary" data-content="26" onClick={()=>setCurrentData(classData.message[25])}></li>
            <li className="step step-primary" data-content="27" onClick={()=>setCurrentData(classData.message[26])}></li>
            <li className="step step-primary" data-content="28" onClick={()=>setCurrentData(classData.message[27])}></li>
            <li className="step step-primary" data-content="29" onClick={()=>setCurrentData(classData.message[28])}></li>
            <li className="step step-primary" data-content="30" onClick={()=>setCurrentData(classData.message[29])}></li>
            </ul>
            <ul className="steps steps-section">
            <li className="step step-primary" data-content="36" onClick={()=>setCurrentData(classData.message[35])}></li>
            <li className="step step-primary" data-content="35" onClick={()=>setCurrentData(classData.message[34])}></li>
            <li className="step step-primary" data-content="34" onClick={()=>setCurrentData(classData.message[33])}></li>
            <li className="step step-primary" data-content="33" onClick={()=>setCurrentData(classData.message[32])}></li>
            <li className="step step-primary" data-content="32" onClick={()=>setCurrentData(classData.message[31])}></li>
            <li className="step step-primary" data-content="31" onClick={()=>setCurrentData(classData.message[30])}></li>
            </ul>
            <ul className="steps steps-section">
            <li className="step step-primary" data-content="37" onClick={()=>setCurrentData(classData.message[36])}></li>
            <li className="step step-primary" data-content="38" onClick={()=>setCurrentData(classData.message[37])}></li>
            <li className="step step-primary" data-content="39" onClick={()=>setCurrentData(classData.message[38])}></li>
            <li className="step step-primary" data-content="40" onClick={()=>setCurrentData(classData.message[39])}></li>
            <li className="step step-primary" data-content="41" onClick={()=>setCurrentData(classData.message[40])} ></li>
            <li className="step step-primary" data-content="42" onClick={()=>setCurrentData(classData.message[41])}></li>
            </ul>
            
            </div>
            </div>
                    </div>
                </div>
             
            </div>
            <br/><br/><br/>
        </MainSpace>
    )
}