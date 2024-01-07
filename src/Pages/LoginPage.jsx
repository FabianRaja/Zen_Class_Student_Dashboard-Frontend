import Base from "../Components/Base";
import LoginForm from "../Components/LoginForm";
export default function LoginPage(){
    return(
        //loginForm component as children for Base component
        <Base>
            <LoginForm/>
        </Base>
    )
}