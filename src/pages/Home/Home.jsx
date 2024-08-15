// import MainCard from "../components/MainCard/MainCard"
import MainCard from "../../components/MainCard/MainCard"
import Header from "../../components/Header/Header"
import Body from "../../components/Body/Body"
import Task from "../../components/Task/Task"
import http from "../../http"
import { useEffect, useState } from "react"


export default function Home() {

  const [tasks, setTasks] = useState(null);
  
  useEffect(() => {
  
    fetchTasks()
  
  } , [])


  function fetchTasks() {
    http.get("tasks").then((res) => {
      
      setTasks(res.data)    
      if(res.data[0] == null || res.status != 200){
        
        setTasks();

      }
      else{
        setTasks([])
        setTasks(res.data)
      }
      
    })

  }
  function createTasks(data) {
    const messagePayload = {"messages" : data};
    http.post("tasks" , messagePayload).then( (res) => {
        const messages = res.data 
        setTasks([messages , ...tasks])
      } 
    )
  }
  function deleteTasks(id){
    // const messagePayload = {"id" : id}
    http.delete(`/tasks/${id}`).then( (res) => {
      if(res.status === 204){
      
        if(tasks){
          setTasks( tasks.filter( (item) => item.id !== id ) )

        }
      
      }
    } )
  }

  // function deleteTasks()

  return (
    <MainCard >
      <Header heading="Todo-app" buttonName="Create new task" onButtonClick = {createTasks}/>
      <Body>
        {tasks  && tasks.map((item) => (
          
            <Task id={item.id} taskName={item.messages} onDelete={deleteTasks} ></Task>

          
        ))}
        {!tasks && (<p>Add some notes...</p>)}

      </Body>
    </MainCard>

  )
}