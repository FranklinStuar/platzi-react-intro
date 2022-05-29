import React from 'react'
import { AppUI } from './AppUI'
// import logo from './logo.svg';
// import './App.css';
const defaultTodos = [
  {text:"hacer lista", completed:false},
  {text:"curso", completed:true},
  {text:"trabajar", completed:false},
  {text:"estudiar", completed:false},
]


function App() {

  const localStorageTodos = localStorage.getItem("TODOS_V1")
  let parsedTodos;
  if(localStorageTodos){
    //transform to object
    parsedTodos = JSON.parse(localStorageTodos)
  }
  else{
    localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos))
    parsedTodos= JSON.parse(localStorage.getItem("TODOS_V1"))
  }

  const [todos,setTodos] = React.useState(parsedTodos)
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

  const saveTodos = (newTodos) => {
    const todosTemp = JSON.stringify(newTodos)
    localStorage.setItem("TODOS_V1",todosTemp)
    setTodos(newTodos) // reder with new information
  }

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

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      onSearchValueSearch = {onSearchValueSearch}
      searchedTodos = {searchedTodos}
      setTodos = {setTodos}
      changeCompleteTodo = {changeCompleteTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
