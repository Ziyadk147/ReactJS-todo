export default function Button({children , buttonColor , buttonType , onClickFunction}){
    return (
        <button  type={buttonType} className={`btn mt-3 btn-lg text-white ${buttonColor}`} onClick={onClickFunction}>
            {children}
        </button>
    )
}