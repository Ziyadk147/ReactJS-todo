import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import Auth from "./pages/AuthPage/Auth";
import SignUp from "./pages/Sign-up/Signup";
export default function App(){

  return(
    <Router>
      <Routes>
        {/* <Route path="/" element={<Auth></Auth>} /> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

      </Routes>
    </Router>
  )

}