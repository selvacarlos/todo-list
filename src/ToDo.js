import React from 'react'

const ToDo = ({todo, handleToggle}) => {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <div className={todo.coplete ? "strike" : ""}>
      {todo.task}
    </div>
  )
}

export default ToDo;