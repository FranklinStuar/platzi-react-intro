import React from 'react'
import { TodoItem } from './TodoItem';

function TodoList(props){
  return(
    <div>
      {props.todos.map( (todo,index) =>{
        return (<TodoItem key={index} text={todo.text}/>)
      })}
    </div>
  )
}

export {TodoList}