import React from 'react'
import "./TodoList.css"
import { TodoItem } from '../TodoItem';

function TodoList(props){
  
  return(
    <section>
      {props.children}
      <ul>
        {props.todos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              changeCompleteTodo={() => props.changeCompleteTodo(todo.text)}
              onDelete={() => props.deleteTodo(todo.text)}
            />
          ))}
      </ul>
    </section>
  )
}

export {TodoList}