export default function Task({taskName , onDelete ,id }) {
    function handleClick(){
        
        onDelete(id);
        
    }
    return (
        <>
            <div className="card bright-red-color text-white mt-2 ">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <p>{taskName}</ p>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <button className="btn-close btn-sm " onClick={handleClick}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}