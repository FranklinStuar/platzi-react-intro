import React from 'react'
import { AppUI } from './AppUI'
// import logo from './logo.svg';
// import './App.css';

//Create new hook fot localstorage
function useLocalStorage(itemName,initialValue){

  // Se simula los estados de carga de la web
  const[loading, setLoading] = React.useState(true)
  const[error, setError] = React.useState(false)
  const [item,setItem] = React.useState(initialValue)

  React.useEffect(()=>{
    setTimeout(() => { // nos permite retrasar el código para simular que la web está cargando desde internet
      try { // conveniente para llamadas de API y verificar si funciona correctamente o algo pasó
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
  
        setItem(parsedItem)
        setLoading(false)
        
      } catch (error) {
        setError(error)
      }
    }, 1500);
  })



  const saveItem = (newItem) => {
    try {
      const itemTemp = JSON.stringify(newItem)
      localStorage.setItem(itemName,itemTemp)
      setItem(newItem) // reder with new information
      
    } catch (error) {
      setError(error)
    }
  }

  // Si se están enviando solo dos estados, se puede usar array, 3 estados o más usar llaves
  return{
    item,
    saveItem,
    loading,
    error
  }
 
}

function App() {

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
/* 
  console.log("antes de use efect")
  React.useEffect(
    ()=>{ // una función para indicar lo que hace el useEffect
      console.log("use efect")
    },
    [completedTodos] // si el array es vacio, se ejecuta una vez, si se agrega una variable, cada que haya un cambio se volverá a ejecutar. si no se agrega el parentesis, se ejecutara siempre que haya un render
  )
  console.log("luego de use efect")
 */
  return (
    <AppUI
      loading = {loading}
      error = {error}
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
