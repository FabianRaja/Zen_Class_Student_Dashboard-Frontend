import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function HomePage(){
    const {setHeading}=useContext(AppCtx);
    useEffect(()=>{
        setHeading("Class");
    })
    return(
        <MainSpace>
            <div className="subject-section">
            <div className="row">
                    <div className="col-8 ">
                            <div className="hero profile-section-1">
                            <div className="hero-content text-center">
                            <div className="max-w-md">
                            <h1 className="text-xl">JavaScript - Day1: Introduction to Browser & web</h1>
                            <h3 className="text-xl">28/08/2023 - Monday - 8.00AM : 11.00 AM</h3><br/>
                            <hr/><br/>
                            <h1 className="text-xl">Contents</h1>
                            <h3 className="text-l">Introduction to web Browser Wars DOM tree CSSOM tree,</h3>
                            <h3 className="text-l">Browser internals - HTML parser,</h3>
                            <h3 className="text-l">CSS parser,  JavaScript V8 engine, </h3>
                            <h3 className="text-l">internals IP, MAC address , Ports & Evolution of HTTP,</h3>
                            <h3 className="text-l">HTTP Methods</h3>
                            <h3 className="text-l">How the Server looks at the URL</h3>
                            <h3 className="text-l">Request & Response cycle</h3><br/>
                            <h1 className="text-xl">Pre-read</h1>
                            <p className="text-l">No preread available</p><br/>
                            </div>
                            </div>
                            </div>
                    </div>

                    <div className="col-4 ">
                    <div class="card">
            <div class="card-body  class-card">
            <h1 className="text-xl text-center">Session Roadmap</h1>
            <hr/>
            <ul className="steps">
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="10"></li>
            <li className="step step-primary" data-content="9"></li>
            <li className="step step-primary" data-content="8"></li>
            <li className="step step-primary" data-content="7"></li>
            <li className="step step-primary" data-content="6"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="11"></li>
            <li className="step step-primary" data-content="12"></li>
            <li className="step step-primary" data-content="13"></li>
            <li className="step step-primary" data-content="14"></li>
            <li className="step step-primary" data-content="15"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="20"></li>
            <li className="step step-primary" data-content="19"></li>
            <li className="step step-primary" data-content="18"></li>
            <li className="step step-primary" data-content="17"></li>
            <li className="step step-primary" data-content="16"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="21"></li>
            <li className="step step-primary" data-content="22"></li>
            <li className="step step-primary" data-content="23"></li>
            <li className="step step-primary" data-content="24"></li>
            <li className="step step-primary" data-content="25"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="30"></li>
            <li className="step step-primary" data-content="29"></li>
            <li className="step step-primary" data-content="28"></li>
            <li className="step step-primary" data-content="27"></li>
            <li className="step step-primary" data-content="26"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="31"></li>
            <li className="step step-primary" data-content="32"></li>
            <li className="step step-primary" data-content="33"></li>
            <li className="step step-primary" data-content="34"></li>
            <li className="step step-primary" data-content="35"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="40"></li>
            <li className="step step-primary" data-content="39"></li>
            <li className="step step-primary" data-content="38"></li>
            <li className="step step-primary" data-content="37"></li>
            <li className="step step-primary" data-content="36"></li>
            </ul>
            <ul className="steps">
            <li className="step step-primary" data-content="41"></li>
            <li className="step step-primary" data-content="42"></li>
            <li className="step step-primary" data-content="43"></li>
            <li className="step step-primary" data-content="44"></li>
            <li className="step step-primary" data-content="45"></li>
            </ul>
            </div>
            </div>
                    </div>
                </div>
             
            </div>
        </MainSpace>
    )
}