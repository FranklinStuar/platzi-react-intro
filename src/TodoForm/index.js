import React from 'react';
import { TodoContext } from '../TodoContext';

import './TodoForm.css'

function ToDoForm(){
  const {setOpenModal, addTodo} = React.useContext(TodoContext)
  const [newTodoValue,setNewTodoValue] = React.useState("")
  const onChange = (evt) => {
    setNewTodoValue(evt.target.value)
  }
  const onCancel = ()=>{
    setOpenModal(false)
  }
  const onSubmit = (evt)=>{
    evt.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
  )
}

export {ToDoForm}