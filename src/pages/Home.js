import React, { useState } from "react";

import style from "../static/css/Home.module.css";

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const onChange = (e) => {
    setTask(`${task}${e.nativeEvent.data}`); // back ticks string concatenation ES6
  };

  const onAdd = () => {
    const newTask = { name: task };
    const newTasks = [...tasks, newTask]; // spread operator
    setTasks(newTasks);
    setTask("");
  };

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
        {tasks.map(
          (
            item // map,reduce functions
          ) => (
            <li>{item.name}</li>
          )
        )}
        {/* <li>please create task</li> */}
      </ul>
    </div>
  );
};

export default Home;
