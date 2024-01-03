import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Helpers/helper";

export default function RegisterForm(){
    const {username,setUsername,email,setEmail,password,setPassword,msg,setMsg}=useContext(AppCtx);

    useEffect(()=>{
     setUsername("")
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
                     localStorage.setItem("token",result.token);
                     navigate("/home")
                 }else{
                     setMsg(result.message);
                 }
         }).catch((error)=>console.log(error));
     }
       
    function handleRegister(){
        const data={
            username,
            email,
            password
        }
        registerUser(data).then((result)=>{
            if(result.message==="Registration successfull"){
                setMsg(result.message);
                setTimeout(()=>{
                    navigate("/")
                },3000)   
            }else{
                setMsg(result.message);
            }
        })
    }
    return(
                <form className="login-email-password-section" onSubmit={(event)=>event.preventDefault()}>
                <a className="login-forgot-button" onClick={()=>navigate("/")}>Already a User?<b>Login</b></a><br/><br/>
                <div className="form-floating mb-3">
                <input type="text" className="form-control login-email" id="floatingName" placeholder="User Name"
                value={username} onChange={(event)=>setUsername(event.target.value)}
                />
                <label name="floatingName">UserName</label>
                </div>
                <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                <label name="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                <input type="password" className="form-control login-email" id="floatingPassword" placeholder="Password"
                value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <label name="floatingPassword">Set Password</label>
                </div>
                <button type="button" className="btn btn-primary login-button mb-3"
                onClick={()=>handleRegister()}
                >Register</button><br/>
                <b>{msg?msg:""}</b><br/><br/>
                <b>{msg?"Redirecting to Login Page":""}</b>
                </form>
   
    )
}