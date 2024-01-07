import Base from "../Components/Base";
import ForgotPassword from "../Components/ForgotPassword";

export default function ForgotPasswordPage(){
    return(
      //ForgotPassword Component as children for Base Component
       <Base>
         <ForgotPassword/>
       </Base>
    )
}