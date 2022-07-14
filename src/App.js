import React, { useState } from 'react';
import { format } from "date-fns";
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import data from "./data.json";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];

    // var formattedDate = format(new Date(userInput.date), 'mm/dd/yyyy')

    copy = [...copy, { id: toDoList.length + 1, task: userInput.task, dueDate: userInput.date, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <h3>hellooooo</h3>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;