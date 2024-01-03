import { useContext, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../Helpers/helper";
import { AppCtx } from "../Context/AppContext";

export default function EmailReset(){
    const {password,setPassword,msg,setMsg}=useContext(AppCtx);
    const params=useParams();
    const id=params.id;
    const navigate=useNavigate();
    useEffect(()=>{
        setPassword("")
        setMsg("")
    },[])
    function handleSubmit(id){
        const data={password}
        resetPassword(id,data).then((result)=>{
            if(result.message==="Password Reset successfull"){
                setMsg(result.message);
                setTimeout(()=>{
                    navigate("/");
                },3000)
            }else{
                setMsg(result.message);
            } 
        }).catch((error)=>console.log(error));
    }
  
    return(
        <form className="login-email-password-section" onSubmit={(event)=>event.preventDefault()}>
                {/* <div className="form-floating mb-3">
                <input type="password" className="form-control login-email" id="floatingInput" placeholder="name@example.com"/>
                <label name="floatingInput">Password</label>
                </div> */}
                <div className="form-floating mb-3">
                <input type="password" className="form-control login-email" id="floatingInput" placeholder="name@example.com"
                value={password} onChange={(event)=>setPassword(event.target.value)}
                />
                <label name="floatingInput">Password</label>
                </div>
                <button type="button" className="btn btn-primary login-button mb-3" onClick={()=>handleSubmit(id)}>Change Password</button><br/>
                <b>{msg?msg:""}</b><br/>
                <b>{msg?"Redirecting to Login Page":""}</b>
        </form>
    )
}