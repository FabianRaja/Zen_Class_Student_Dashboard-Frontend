import Base from "../Components/Base";
import EmailReset from "../Components/EmailReset";


export default function EmailResetPage(){
    //EmailReset Component as children for Base Component
    return(
       <Base>
           <EmailReset/>
       </Base>
    )
}