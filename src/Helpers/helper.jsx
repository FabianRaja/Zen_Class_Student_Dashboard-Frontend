import { useEffect } from "react";
import { API } from "./api";

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

 export async function portfolioSubmission(data){
   try {
      const res=await fetch(`${API}/portfolio`,{
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

export async function capstoneSubmission(data){
   try {
      const res=await fetch(`${API}/capstone`,{
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