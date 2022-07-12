import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import ToDoList from "./ToDoList";
import data from "./data.json";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  return (
    <div classNamade="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;