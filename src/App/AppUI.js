import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

const AppUI = ({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    onSearchValueSearch,
    searchedTodos,
    changeCompleteTodo,
    deleteTodo
  }) => {
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
        {/* Se puede enviar información desde la parte interna de un elemento y llamarlo como hijo dentro del componente */}  
        {error&&<p>Desespérate,hubo un error...</p>}
        {loading&&<p>Cargando...</p>}
        {(!loading&&!searchedTodos.length)&&<p>¡Crea tu primer TODO!</p>}
      <CreateTodoButton/>
    </>
  );
}
 
export {AppUI};