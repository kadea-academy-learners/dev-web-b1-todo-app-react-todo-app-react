import React, { ChangeEventHandler } from 'react'
import InputField from './inputField'

export type TaskProps = {
    task:string
    id: string
    isCompleted?: boolean
    handleDelete?: () => void
    onToggle: (id: string) => void
}
export const Task: React.FC<TaskProps> = ({id, task, isCompleted, handleDelete, onToggle }) => {
const toggleComplete : ChangeEventHandler<HTMLInputElement> = () => {
  onToggle(id)
}
  return (
    <li id={id}>
        <InputField type='checkbox' checked={isCompleted} onChange={toggleComplete}/>
        <p>{task}</p>
        <button onClick={handleDelete}>x</button>
    </li>
  )
}

