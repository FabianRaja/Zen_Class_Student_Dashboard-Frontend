import { useContext, useEffect } from "react"

import { forgotUser } from "../Helpers/helper";
import { AppCtx } from "../Context/AppContext";

export default function ForgotPassword(){
    const {email,setEmail,msg,setMsg}=useContext(AppCtx);
    useEffect(()=>{
        setEmail("")
        setMsg("")
    },[])
    function handleForgot(){
        const data={email};
        console.log(data);
        forgotUser(data).then((result)=>{
                setMsg(result.message);
        }).catch((error)=>console.log(error))
    }
    return(

        
        <form className="login-email-password-section" onSubmit={(event)=>event.preventDefault()}>
                <div className="form-floating mb-3">
                <input type="email" className="form-control login-email" id="floatingInput" placeholder="name@example.com"
                value={email} onChange={(event)=>setEmail(event.target.value)}
                />
                <label name="floatingInput">Registered Email address</label>
                </div>
                <button type="button" className="btn btn-primary login-button mb-3"
                onClick={()=>handleForgot()}
                >Submit</button><br/>
                <b>{msg?msg:""}</b>
        </form>
    )
}