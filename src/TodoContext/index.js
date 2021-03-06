import React from 'react';
import {useLocalStorage} from "./../TodoContext/useLocalStorage"
// Nos ayuda a compartir estados de variables y hooks por la aplicación y no tener que enviarlos como props
const TodoContext=React.createContext();

function TodoProvider(props) {
  
  // se cambia la forma de llamar de [] a llaves porque en el hook también cambia
  // en luego de : se pone el nombre con el que va a trabajar en el resto de la aplicacion
 /*  const defaultTodos = [
    {text:"hacer lista", completed:false},
    {text:"curso", completed:true},
    {text:"trabajar", completed:true},
    {text:"estudiar", completed:false},
  ] */
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1",[])

  const [searchValue,setSearchValue] = React.useState("")
  // for modal from other portal
  const [openModal,setOpenModal] = React.useState(false)
  
  let searchedTodos = []

  if(!searchValue.length>=1) 
    searchedTodos = todos
  else
    searchedTodos = todos.filter(todo => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });


  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // functions to components
  const onSearchValueSearch = (evt) => {
    setSearchValue(evt.target.value)
  }

  const changeCompleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const todosTemp = [...todos]
    todosTemp[todoIndex].completed = !todosTemp[todoIndex].completed // change to true or false - inverse
    saveTodos(todosTemp) // reder with new information
  }

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const todosTemp = [...todos]
    todosTemp.splice(todoIndex,1)
    saveTodos(todosTemp) // reder with new information
  }
  const addTodo = (text) =>{
    const todosTemp = [...todos]
    todosTemp.push({text:text, completed:false})
    saveTodos(todosTemp) // reder with new information
  }

  return(

    <TodoContext.Provider value={{
      
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      onSearchValueSearch,
      searchedTodos,
      changeCompleteTodo,
      deleteTodo,
      addTodo,
      todos,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}


/* Lo usaremos cuando necesitemos obtener los estados que estamos enviando desde Provider */
{/* <TodoContext.Consumer></TodoContext.Consumer> */}

export {TodoContext,TodoProvider}