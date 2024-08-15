
export default function Body({children , color}) {
    return (
        <div className={`card-body ${color}`}>
          {children}

        </div>
    )
}