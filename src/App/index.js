import React from 'react'
import { TodoProvider } from './../TodoContext'
import { AppUI } from './AppUI'
// import logo from './logo.svg';
// import './App.css';

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>

  );
}

export default App;
