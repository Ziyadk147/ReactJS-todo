import Modal from "../Modal/Modal"
export default function Header({ heading, buttonName , onButtonClick }) {
    function handleSubmit(data){
        
        console.log(data);
        onButtonClick(data)        
    }
    return (
        <div className="row">
            <div className="col-sm-2 col-lg">
                <h3>{heading}</h3>
            </div>
            <div className="col-sm-4  col-lg-2">

                <button type="button"  className="btn dark-color text-white mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    {buttonName}
                </button>


            </div>
            <Modal onModalSubmit = {handleSubmit}  />

        </div>
    )
}