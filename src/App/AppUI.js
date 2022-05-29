import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

const AppUI = ({totalTodos,completedTodos,searchValue,onSearchValueSearch,setTodos,searchedTodos,changeCompleteTodo,deleteTodo}) => {
  return (  
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        onSearchValueSearch={onSearchValueSearch}
        todos={searchedTodos} 
        />
      <TodoList
        setTodos={setTodos} 
        todos={searchedTodos}
        changeCompleteTodo={changeCompleteTodo}
        deleteTodo={deleteTodo}
      />
      <CreateTodoButton/>
    </>
  );
}
 
export {AppUI};