import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form"

export default function SignUp(){
    const navigate = useNavigate();

    function handleLogIn(){
      navigate("/")
    }
  
    return (
      <Form type={"register"} onNavigationClick={handleLogIn}/>

    )
}