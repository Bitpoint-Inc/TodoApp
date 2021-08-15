import React, { useContext, useState } from "react";

import style from "../static/css/Home.module.css";

const Home = (todo) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // text: "Please insert something"
   

  const onChange = (e) => {
    setTask(`${task}${e.nativeEvent.data}`); // back ticks string concatenation ES6
  };

  const onAdd = () => {
    const newTask = { name: task };
    const newTasks = [...tasks, newTask]; // spread operator
    setTasks(newTasks);
    setTask("");
  };
  /* const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }; */

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
          type="text"
          placeholder="Enter a Task"
          className={style.input}
          onChange={onChange} // call by reference
          value={task}
        />
        <button className={style.primaryButton} onClick={onAdd}>
          Add
        </button>
      </div>

      <ul className={style.taskList}> 
      <li>Please enter something</li>
        {tasks.map(
          ( 
            
            item, // map,reduce functions also remember to settext
            
          ) => (
            <li className={style.strike}>{item.name}</li>
          )
        )}
        {/* <li>please create task</li>  textDecoration: isDone ? "line-through" : ""*/}
      </ul>
    </div>
  );
};

export default Home;
