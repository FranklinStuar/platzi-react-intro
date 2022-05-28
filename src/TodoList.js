import React from 'react'
import { TodoItem } from './TodoItem';
import "./TodoList.css"

function TodoList(props){
  return(
    <ul>
      {props.todos.map( (todo,index) =>{
        return (<TodoItem key={index} text={todo.text}/>)
      })}
    </ul>
  )
}

export {TodoList}