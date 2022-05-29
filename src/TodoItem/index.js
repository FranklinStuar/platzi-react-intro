import React from 'react'
import "./TodoItem.css"
function TodoItem({
  changeCompleteTodo,
  completed,
  text,
  onDelete
}){
  
  return(
    <li className="TodoItem">
      <span 
        onClick={ changeCompleteTodo} 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
      > √ </span>

      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      
      <span 
        onClick={ onDelete}  
        className="Icon Icon-delete"
      > X </span>
    </li>
  )
}

export {TodoItem}