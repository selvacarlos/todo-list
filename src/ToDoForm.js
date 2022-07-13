import React, { useState } from 'react';

const initialValues = {
  task: ""
};

const ToDoForm = ({ addTask, addDate }) => {

  // const [ userInput, setUserInput ] = useState('');
  // const [ dateInput, setDateInput ] = useState('');
  const [ values, setValues ] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(values);
    // addDate(values.dueDate);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.task} type="text" onChange={handleChange} name="task" placeholder="Enter task..."/>
      <input value={values.dueDate} type="date" onChange={handleChange} name="date" placeholder="Enter due date..."/>
      <button>Submit</button>
    </form>
  );
}

export default ToDoForm;