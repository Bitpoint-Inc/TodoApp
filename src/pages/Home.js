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
    const newTask = { name: task, isDone: false };
    const newTasks = [...tasks, newTask]; // spread operator
    setTasks(newTasks);
    setTask("");
  };

  const onDone = (task) =>{
    const index = tasks.findIndex((obj)=>obj.name === task.name) //read about arraymethods in JS
    const status = {...tasks[index]}
    const newTask = {...tasks[index], isDone: !status.isDone} 
    const newTasks = [
      ...tasks.slice(0,index),
      newTask, tasks.slice(index+1)
    ]
    setTasks(newTasks)
  }
  
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
      {tasks.length === 0 && <li>Please enter something</li>}
        {tasks.map(
          ( 
            
            item, // map,reduce functions 
            // delete = null and text wrapping rm empty n reset or mark all as done
          ) => (
            <li className={item.isDone ? style.strike: {}} onClick={() => onDone(item)}>{item.name}</li>
          )
        )}
        {/* <li>please create task ""*/}
      </ul>
    </div>
  );
};

export default Home;
