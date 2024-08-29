import { ChangeEventHandler, useState } from 'react'

import './App.css'
import InputField from './components/inputField'
import {  TaskProps } from './components/task'
import { Button } from './components/button'
import { TaskContainer } from './components/taskContainer'




function App() {  
const [inputValue, setInputValue] = useState<string>("")
const [tasks, setTasks] = useState<TaskProps[]>([])


const handleChange: ChangeEventHandler<HTMLInputElement>  =  (event) => {
  setInputValue(event.target.value)
}

const handleClick = () => {

  const newTask: TaskProps = {
    id: crypto.randomUUID(),
    task: inputValue,
    isCompleted: false
  } 

   setTasks([...tasks, newTask])
 
}

const toggleCompleted = (id: string) => {
  // Selectionner l'element qui a l'id donnée
console.log(id)

  // Modifier le champ isCompleted de l'element trouvé

  //Mettre à jour le state
}
  return (
    <>
     <h1>Todo List</h1>
     <InputField type='text' placeholder="your task" value={inputValue} onChange={handleChange}/>
     <Button onClick={handleClick}>Add</Button>
  
    <TaskContainer tasks={tasks} onToggle={toggleCompleted} />
    </>
  )
}

export default App
