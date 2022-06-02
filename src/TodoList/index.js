import React from 'react'
import "./TodoList.css"
import { TodoContext } from '../TodoContext';
import { TodoItem } from '../TodoItem';

function TodoList(props){
  
  return(
    <section>
      {props.children}
      <ul>
      {/* Alternative: React.useContext(TodoContext) */}
      <TodoContext.Consumer>
        {({todos,changeCompleteTodo,deleteTodo}) =>
          (
            todos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                changeCompleteTodo={() => changeCompleteTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))
          )
        }
      </TodoContext.Consumer>

      </ul>
    </section>
  )
}

export {TodoList}