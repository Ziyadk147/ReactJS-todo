import { useState } from "react";

export default function Task({taskName , onDelete ,id }) {
    
    const [isRemoving , setIsRemoving] = useState(false);
    function handleClick(){
        
        setIsRemoving(true);
        
        setTimeout( () => {
        
            onDelete(id);
        
        }  , 1000)
        
    }
    return (
        <>
            <div className={`card bright-red-color text-white mt-2 ${isRemoving ? 'aos-animate-remove' : ""} `} data-aos={isRemoving ? 'fade-right' : 'fade-left'}>
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