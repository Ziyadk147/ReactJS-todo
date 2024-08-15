// import MainCard from "../components/MainCard/MainCard"
import MainCard from "../../components/MainCard/MainCard"
import Header from "../../components/Header/Header"
import Body from "../../components/Body/Body"
import Task from "../../components/Task/Task"
import http from "../../http"
import { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {

  const [tasks, setTasks] = useState(null);
  
  useEffect(() => {
  
    fetchTasks()
    AOS.init({
      duration: 1000, // You can change the animation duration
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
    

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
      <Body color={"dark-color"}>
        {tasks  && tasks.map((item) => (
          
            <Task id={item.id} key={item.id} taskName={item.messages} onDelete={deleteTasks} ></Task>

          
        ))}
        {!tasks && (<p>Add some notes...</p>)}

      </Body>
    </MainCard>

  )
}