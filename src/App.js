import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import logo from './logo.svg';
import './App.css';
const todos = [
  {text:"hacer lista", completed:false},
  {text:"curso", completed:false},
  {text:"estudiar", completed:false},
]
function App(props) {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList todos={todos} />
      <CreateTodoButton/>
    </>
  );
}

export default App;
