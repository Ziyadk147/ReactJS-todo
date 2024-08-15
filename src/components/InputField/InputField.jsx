export default function InputField({ inputType, inputName, placeHolder, Label }) {
    return (
        <>
            <div className="row pt-3">
                <div className="col-2 mt-1">
                    <label htmlFor={inputName}>{Label}</label>
                </div>
                <div className="col">
                    <input type={inputType} name={inputName} className="form-control" placeholder={placeHolder} />

                </div>
            </div>

        </>

    )
}