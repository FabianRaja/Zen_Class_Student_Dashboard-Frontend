import { API } from "./api";

//function to register user
export async function registerUser(data){
   try {
      const res=await fetch(`${API}/add`,{
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

//function to login user
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

//function to send reset password link to a user
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

 //function to reset password
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

 //function to get class data
 export async function getClassData(){
   try {
      const res=await fetch(`${API}/mern/getClass`,{
        method:"GET",
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

 //function to get requirements data
 export async function getRequirementsData(){
   try {
      const res=await fetch(`${API}/mern/getRequirements`,{
        method:"GET",
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

 //function to get placements data
 export async function getPlacementsData(){
   try {
      const res=await fetch(`${API}/mern/getPlacement`,{
        method:"GET",
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

 //function to submit portfolio
 export async function portfolioSubmission(data){
   try {
      const res=await fetch(`${API}/portfolio`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "x-auth-token":data.token,
            "Content-type":"application/json"
        }
      })
      const result=await res.json();
      return result;
   } catch (error) {
      return error;
   }
}

//function to submit capstone
export async function capstoneSubmission(data){
   try {
      const res=await fetch(`${API}/capstone`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
             "x-auth-token":data.token,
            "Content-type":"application/json"
        }
      })
      const result=await res.json();
      return result;
   } catch (error) {
      return error;
   }
}

//function to submit leave application
export async function leaveSubmission(data){
   try {
      const res=await fetch(`${API}/leave`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "x-auth-token":data.token,
            "Content-type":"application/json"
        }
      })
      const result=await res.json();
      return result;
   } catch (error) {
      return error;
   }
}

//function to submit testimonial
export async function testimonialSubmission(data){
   try {
      const res=await fetch(`${API}/testimonial`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
             "x-auth-token":data.token,
            "Content-type":"application/json"
        }
      })
      const result=await res.json();
      return result;
   } catch (error) {
      return error;
   }
}

//function to submit query
export async function querySubmission(data){
   try {
      const res=await fetch(`${API}/query`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "x-auth-token":data.token,
            "Content-type":"application/json"
        }
      })
      const result=await res.json();
      return result;
   } catch (error) {
      return error;
   }
}

//function to submit task
export async function taskSubmission(data){
   try {
      const res=await fetch(`${API}/task`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "x-auth-token":data.token,
            "Content-type":"application/json"
        }
      })
      const result=await res.json();
      return result;
   } catch (error) {
      return error;
   }
}
