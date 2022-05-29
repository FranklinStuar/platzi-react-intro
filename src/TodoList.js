import React from 'react'
import "./TodoList.css"
import { TodoItem } from './TodoItem';

function TodoList({todos,setTodos}){
  
  const changeCompleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const todosTemp = [...todos]
    todosTemp[todoIndex].completed = !todosTemp[todoIndex].completed // change to true or false - inverse
    setTodos(todosTemp) // reder with new information
  }
  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const todosTemp = [...todos]
    todosTemp.splice(todoIndex,1)
    setTodos(todosTemp) // reder with new information
  }
  return(
    <section>
      <ul>
      {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => changeCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ul>
    </section>
  )
}

export {TodoList}