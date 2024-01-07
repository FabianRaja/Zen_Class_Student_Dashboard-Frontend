import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";


export default function TopBar(){
    const navigate=useNavigate();
    function handleLogout(){
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        navigate("/");
    }
    const {heading}=useContext(AppCtx);
    const userDetails=JSON.parse(localStorage.getItem("data"))


    
    return(
        <div className="topbar">
                   
                   <div className="navbar top-bar">
                    <div className="flex-1">
                        <a className="text-xl text-heading"><b>{heading}</b></a>
                    </div>
                    <div className="flex-1">
                    <a className="text-xl text-heading " onClick={()=>navigate("/taskSubmit")}><b>{heading==="tasks"?"Submit Task":""}</b></a>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                        <b className="text-heading">{userDetails.username?userDetails.username:''}</b>
                        </div>
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-content rounded-box w-32">
                            <li><a className="justify-between" onClick={()=>navigate("/profile")}>Profile</a></li>
                            <li><a onClick={()=>handleLogout()}>Logout</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>

         </div>
        
    )
}

