export default function MainCard({children}){
    return (
        <div className="row mt-5">
            <div className="card p-2 dark-purple-color text-white">
                {children}
            </div>
        </div>
    )
}