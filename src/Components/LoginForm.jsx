import { useContext, useEffect } from "react"

import { loginUser } from "../Helpers/helper";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";



export default function LoginForm(){
    const {email,setEmail,password,setPassword,msg,setMsg}=useContext(AppCtx);
   
    
     
   useEffect(()=>{
    setEmail(""),
    setPassword(""),
    setMsg("")
   },[])

    const navigate=useNavigate();
    function handleLogin(){
        const data={
            email,
            password
        }
        loginUser(data).then((result)=>{
                if(result.message==="login successful"){
                    setMsg(result.message);
                    console.log(result.user);
                    localStorage.setItem("data",JSON.stringify(result.user));
                    localStorage.setItem("token",result.token);
                    setTimeout(()=>{
                        navigate("/home")
                    },500)
                    
                }else{
                    setMsg(result.message);
                }
        }).catch((error)=>console.log(error));
    }
    return(
                <form className="login-email-password-section" onSubmit={(event)=>event.preventDefault()}>
                <a className="login-forgot-button" onClick={()=>navigate("/register")}>New User? <b>Register</b></a><br/><br/>
                <div className="form-floating mb-3">
                <input type="email" className="form-control login-email" id="floatingInput" placeholder="name@example.com"
                value={email} onChange={(event)=>setEmail(event.target.value)}
                />
                <label name="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                <input type="password" className="form-control login-email" id="floatingPassword" placeholder="Password"
                value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <label name="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-primary login-button mb-3"
                onClick={()=>handleLogin()}
                >Login</button><br/>
                <b>{msg?msg:""}</b><br/><br/>
                <a className="login-forgot-button" onClick={()=>navigate("/forgot")}>Forgot Password?</a>
                </form>
    )
}