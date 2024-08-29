import React from 'react'
import { Task, TaskProps } from './task'

type TaskContainerProps = {
    tasks: TaskProps[]
    onToggle: (id: string)=> void
}

export const TaskContainer = (props: TaskContainerProps ) => {
  return (
    <ul>
        {props.tasks.map((task)=> <Task onToggle={props.onToggle} key={task.task} task={task.task} id={task.id}/>)}
    </ul>
  )
}

