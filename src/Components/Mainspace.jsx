import SideBar from "./SideBar";
import TopBar from "./TopBar";

//mainspace used for sidebar and topbar as mandatory in page with children property
export default function MainSpace({children}){
 
    return(
        <div className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-2" id="sidebar-section">
            <SideBar/>
          </div>
          <div className="col-10">
            <div className="row" id="topbar-section">
            <TopBar/>
            </div>
            <div className="row justify-content-start" id="subject-section" >
            {children}
            </div>
            
          </div>
        </div>
      </div>
    )
}