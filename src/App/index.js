import React from 'react'
import { AppUI } from './AppUI'
// import logo from './logo.svg';
// import './App.css';

//Create new hook fot localstorage
function useLocalStorage(itemName,initialValue){

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;

  if(localStorageItem){
    //transform to object
    parsedItem = JSON.parse(localStorageItem)
  }
  else{
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    parsedItem= JSON.parse(localStorage.getItem(itemName))
  }

  const [item,setItem] = React.useState(parsedItem)


  const saveItem = (newItem) => {
    const itemTemp = JSON.stringify(newItem)
    localStorage.setItem(itemName,itemTemp)
    setItem(newItem) // reder with new information
  }

  return[item,saveItem]
 
}

function App() {

  const [todos,saveTodos] = useLocalStorage("TODOS_V1",[])

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


  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      onSearchValueSearch = {onSearchValueSearch}
      searchedTodos = {searchedTodos}
      changeCompleteTodo = {changeCompleteTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
