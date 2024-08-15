import MainCard from "../MainCard/MainCard"
import InputField from "../InputField/InputField"
import Button from "../Button/Button"
export default function Form({ type , onNavigationClick}) {
    return (
        <>
            <MainCard backgroundcolor="light-purple-color" textcolor="text-white" colsize="col-5">
                {type === "login" ? (
                    <>
                        <InputField inputType={"email"} inputName={"email"} placeHolder={"Please Enter your Email"} Label={"Email:"} />
                        <InputField inputType={"password"} inputName={"password"} placeHolder={"Please Enter your password"} Label={"password:"} />
                        <div className="row ">
                            <div className="col-3">
                                <Button buttonColor={'dark-color'} onClickFunction = {onNavigationClick}>Sign-up</Button>
                            </div>
                            <div className="col">
                                <Button buttonColor={'dark-color'}>Login</Button>
                            </div>
                            
                        </div>

                    </>
                ) : (
                    <>
                        <InputField inputType={"email"} inputName={"email"} placeHolder={"Please Enter your Email"} Label={"Email:"} />
                        <InputField inputType={"text"} inputName={"name"} placeHolder={"Please Enter your Name"} Label={"Name:"} />
                        <InputField inputType={"password"} inputName={"password"} placeHolder={"Please Enter your password"} Label={"password:"} />
                        {/* <Button buttonColor={'dark-color'}>Sign-up</Button> */}
                        <div className="row ">
                            <div className="col-3">
                                <Button buttonColor={'dark-color'} onClickFunction = {onNavigationClick}>Login</Button>
                            </div>
                            <div className="col">
                                <Button buttonColor={'dark-color'}>Signup</Button>
                            </div>
                            
                        </div>

                    </>
                )}

            </MainCard>
        </>

    )
}