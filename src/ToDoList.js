import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {

  const numAscending = [...toDoList].sort((a, b) =>
    a.dueDate > b.dueDate ? 1 : -1,
  );

  return (
    <div>
      {numAscending.map(todo => {
        return (
          <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
        )
      })}
      <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
    </div>
  )
}

export default ToDoList;
