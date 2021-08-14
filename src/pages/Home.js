import React from "react";

import style from "../static/css/Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input type="text" placeholder="Enter a Task" className={style.input} />
        <button className={style.primaryButton}>Add</button>
      </div>

      <ul className={style.taskList}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
        <li>Task 4</li>
        <li>Task 5</li>
        <li>Task 6</li>
      </ul>
    </div>
  );
};

export default Home;
