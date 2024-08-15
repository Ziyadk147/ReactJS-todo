import Button from "../../components/Button/Button"
import MainCard from "../../components/MainCard/MainCard"
import Form from "../../components/Form/Form"
import { useNavigate } from "react-router-dom"
export default function Login(){
  const navigate = useNavigate();

  function handleSignUp(){
    navigate("/signup")
  }

    return (
      <Form type={"login"} onNavigationClick = {handleSignUp}/>
    )
}