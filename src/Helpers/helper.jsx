import { API } from "./api";

export async function loginUser(data){
   try {
      const res=await fetch(`${API}/login`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        }
      })
      const result=await res.json();
      return result;
   } catch (error) {
      return error;
   }
}

export async function forgotUser(data){
    try {
       const res=await fetch(`${API}/forgot`,{
         method:"POST",
         body:JSON.stringify(data),
         headers:{
             "Content-type":"application/json"
         }
       })
       const result=await res.json();
       return result;
    } catch (error) {
       return error;
    }
 }

 export async function resetPassword(id,data){
    try {
       const res=await fetch(`${API}/reset/${id}`,{
         method:"POST",
         body:JSON.stringify(data),
         headers:{
             "Content-type":"application/json"
         }
       })
       const result=await res.json();
       return result;
    } catch (error) {
       return error;
    }
 }