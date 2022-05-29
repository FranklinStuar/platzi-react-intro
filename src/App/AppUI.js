import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

const AppUI = () => {
  return (  
    <>
      <TodoCounter/>
      <TodoSearch/>
      
    
      <TodoContext.Consumer>
        {({error,loading,searchedTodos}) =>(
            <TodoList> 
              {/* Se puede enviar información desde la parte interna de un elemento y llamarlo como hijo dentro del componente */}  
              {error && <p>Desespérate,hubo un error...</p>}
              {loading && <p>Cargando...</p>}
              {(!loading&&!searchedTodos.length)&&<p>¡Crea tu primer TODO!</p>}
            </TodoList> 
          )
        }
      </TodoContext.Consumer>
      < CreateTodoButton/>
    </>
  );
}
 
export {AppUI};