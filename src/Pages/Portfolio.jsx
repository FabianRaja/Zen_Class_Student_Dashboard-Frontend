import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
import { portfolioSubmission } from "../Helpers/helper";
export default function PortfolioPage(){
    const {setHeading,portfolio,setPortfolio,msg,setMsg}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Portfolio Submission");
        setMsg("");
    },[])
    
    const userDetails=JSON.parse(localStorage.getItem("data"));

    function handleSubmit(){
        const data={
            _id:userDetails._id,
            link:portfolio
        }
        portfolioSubmission(data).then((result)=>setMsg(result.message)).catch((err)=>setMsg(result.message))
    }
    return(
        <MainSpace>
             <div className="subject-section">
                <div className="row portfolio-section">
                    <div className="col-6 ">
                            <div className="hero portfolio-section-1">
                            <div className="hero-content text-center">
                            <div className="max-w-md">
                            <h1 className="text-5xl">Portfolio Review</h1><br/><hr/>
                            <div className="portfolio-review">
                            <h3>Status : {userDetails.portfolio.status?userDetails.portfolio.status:"Not Submitted"}</h3>
                            <h3>Batch : B51 WD Tamil</h3>
                            <h3>Reviewed By: {userDetails.portfolio.reviewed?userDetails.portfolio.reviewed:"Not Submitted"}</h3>
                            <h3>Comment: {userDetails.portfolio.comment?userDetails.portfolio.comment:"Not Submitted"}</h3>
                            <h3><b>{msg?msg:""}</b></h3>
                            </div> 
                            </div>
                            </div>
                            </div>
                    </div>
                    {userDetails.portfolio.status!="submitted" && msg==="portfolio submitted successfully"?
                    (
                        <div className="col-6 ">
                            <div className="hero portfolio-section-2">
                                
                            <div className="hero-content text-center">
                            <div className="max-w-md">
                            <form className="portfolio-submission-form" onSubmit={(event)=>event.preventDefault()}>
                            <label >GitHub URL</label>
                            <input type="url" placeholder="Paste the github url" className="input input-bordered w-full max-w-xs " />
                            <label >Portfolio URL</label>
                            <input type="url" placeholder="Paste the portfolio url" className="input input-bordered w-full max-w-xs" value={portfolio} onChange={(event)=>setPortfolio(event.target.value)} />  
                            <label >Resume URL</label>
                            <input type="url" placeholder="Paste the resume url" className="input input-bordered w-full max-w-xs" />    
                            <button className="btn btn-active btn-neutral" onClick={()=>handleSubmit()}>Submit</button>
                            </form><br/>
                            <h3>Note : You Wont be Able to Submit When the Portfolio is under Review or Reviewed</h3>
                            </div>
                            </div>
                            </div>
                    </div>
                    ):<h1 className="col-6 text-center text-4xl mt-40"><b>Submitted for Review</b></h1>
                    }
                    
                </div>
             
             </div>
        </MainSpace>
    )
}