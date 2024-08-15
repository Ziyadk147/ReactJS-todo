/* eslint-disable react/prop-types */
import { useState } from "react"

export default function Modal({onModalSubmit}) {
  const [task , setTasks] = useState("");
  // const message = "";
  function handleChange(event){
    
    setTasks(event.target.value)
  }

  function submitData(task){
    setTasks("")
    onModalSubmit(task)
  }

  return (
    <>
      <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content dark-color">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Add a new Task</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
              <input type="text" className="form-control my-4" onChange={handleChange} value={task}   placeholder="Enter a task" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {submitData(task)}}>Create Tasks</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}