import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
// import logo from './logo.svg';
// import './App.css';
const defaultTodos = [
  {text:"hacer lista", completed:false},
  {text:"curso", completed:true},
  {text:"trabajar", completed:false},
  {text:"estudiar", completed:false},
]
function App() {
  const [todos,setTodos] = React.useState(defaultTodos)
  const [searchValue,setSearchValue] = React.useState("")
  
  let searchedTodos = []
  if(!searchValue.length>=1){
    searchedTodos = todos
  }
  else{
    searchedTodos = todos.filter(todo => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
  }


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;



  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todos={searchedTodos} 
        />
      <TodoList
        setTodos={setTodos} 
        todos={searchedTodos}
      />
      <CreateTodoButton/>
    </>
  );
}

export default App;
