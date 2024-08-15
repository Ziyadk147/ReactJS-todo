export default function MainCard({children , backgroundcolor="dark-purple-color" , textcolor="text-white" , colsize=""}){
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className={`card p-2 ${backgroundcolor} ${textcolor} ${colsize}`}>
                {children}
            </div>
        </div>
    )
}