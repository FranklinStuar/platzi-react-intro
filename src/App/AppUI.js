import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

const AppUI = () => {

  // En vez de usar los valores dentro de context Consumer, lo uso aquí
  const {error,loading,searchedTodos,todos} = React.useContext(TodoContext)

  return (  
    <>
      <TodoCounter/>
      <TodoSearch/>
      
    
        <TodoList> 
          {/* Se puede enviar información desde la parte interna de un elemento y llamarlo como hijo dentro del componente */}  
          {error && <p>Desespérate,hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {(!loading&&!searchedTodos.length)&&<p>¡No se encontró algún TODO!</p>}
          {(!loading&&!todos.length)&&<p>¡Crea tu primer TODO!</p>}
        </TodoList> 
      < CreateTodoButton/>
    </>
  );
}
 
export {AppUI};