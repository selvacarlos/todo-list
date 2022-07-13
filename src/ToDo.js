import React from 'react'

const ToDo = ({todo, handleToggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
      <div style={{ float: "left", paddingLeft: "50px", marginRight: "-130px" }}>
        {todo.dueDate} 
      </div>
      {todo.task} 
    </div>
  )
}

export default ToDo;