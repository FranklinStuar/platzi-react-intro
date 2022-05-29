import React from 'react'
import "./TodoList.css"
import { TodoItem } from '../TodoItem';

function TodoList({todos,changeCompleteTodo,deleteTodo}){
  
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