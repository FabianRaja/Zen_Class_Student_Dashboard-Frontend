import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";
export default function PortfolioPage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Portfolio Submission");
    })
    
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
                            <h3>Status : Not Submitted</h3>
                            <h3>Batch : Not Submitted</h3>
                            <h3>Reviewed By: Not Submitted</h3>
                            <h3>Comment: Not Submitted</h3>
                            </div> 
                            </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-6 ">
                            <div className="hero portfolio-section-2">
                                
                            <div className="hero-content text-center">
                            <div className="max-w-md">
                            <form className="portfolio-submission-form">
                            <label >GitHub URL</label>
                            <input type="url" placeholder="Paste the github url" className="input input-bordered w-full max-w-xs " />
                            <label >Portfolio URL</label>
                            <input type="url" placeholder="Paste the portfolio url" className="input input-bordered w-full max-w-xs" />  
                            <label >Resume URL</label>
                            <input type="url" placeholder="Paste the resume url" className="input input-bordered w-full max-w-xs" />    
                            <button className="btn btn-active btn-neutral">Submit</button>
                            </form><br/>
                            <h3>Note : You Wont be Able to Submit When the Portfolio is under Review or Reviewed</h3>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
             
             </div>
        </MainSpace>
    )
}