import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

const AppUI = ({totalTodos,completedTodos,searchValue,onSearchValueSearch,searchedTodos,changeCompleteTodo,deleteTodo}) => {
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
        todos={searchedTodos}
        changeCompleteTodo={changeCompleteTodo}
        deleteTodo={deleteTodo}
      />
      <CreateTodoButton/>
    </>
  );
}
 
export {AppUI};