import React from 'react';
import {useLocalStorage} from "./../TodoContext/useLocalStorage"
// Nos ayuda a compartir estados de variables y hooks por la aplicación y no tener que enviarlos como props
const TodoContext=React.createContext();

function TodoProvider(props) {
  
  // se cambia la forma de llamar de [] a llaves porque en el hook también cambia
  // en luego de : se pone el nombre con el que va a trabajar en el resto de la aplicacion
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1",[])

  const [searchValue,setSearchValue] = React.useState("")
  
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
      todos,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}


/* Lo usaremos cuando necesitemos obtener los estados que estamos enviando desde Provider */
{/* <TodoContext.Consumer></TodoContext.Consumer> */}

export {TodoContext,TodoProvider}