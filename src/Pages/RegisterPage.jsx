import Base from "../Components/Base";
import RegisterForm from "../Components/RegisterForm";
export default function(){
    return(
        //registerForm component as children for Base component
        <Base>
        <RegisterForm/>
        </Base>
    )
}