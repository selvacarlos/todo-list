import React from 'react'
import styles from './header.css';

const Header = () => {
  return (
    <header>
      <div>
        <h3 id="due-date">Due Date</h3> 
        <h1 id="to-do">To Do List</h1>
      </div>
      <hr />
    </header>
  )
}

export default Header;