import React, { useState } from "react";
import List from "../List/List";
import "./Form.css";

function Form() {
  const [newTask, setNewTask] = useState("");
  const [toDoArr, setToDoArr] = useState([]);

  const newTaskHandler = (e) => {
    const { value } = e.target;
    setNewTask(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setToDoArr([
      ...toDoArr,
      {
        id: Math.floor(Math.random() * 100),
        task: { newTask },
        check: false,
      },
    ]);
    // setToDoArr(toDoArr.push(newTask));
    setNewTask("");

    // if (localStorage.getItem("toDoList")) {
    //   const newToDo = JSON.parse(localStorage.getItem("toDoList"));
    //   newToDo.push(...toDoArr);
    //   localStorage.setItem("toDoList", JSON.stringify(newToDo));
    // } else {
    //   localStorage.setItem("toDoList", JSON.stringify(toDoArr));
    // }
  };
  return (
    <div className="wrapper">
      <h1>To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="newTask"
          value={newTask}
          onChange={newTaskHandler}
          placeholder="Add Your New Task"
          className="toDo_Input"
          required
        />
        <button type="submit">Add</button>
      </form>
      <div className="toDo_List">
        <List
          newTask={newTask}
          setNewTask={setNewTask}
          setToDoArr={setToDoArr}
          toDoArr={toDoArr}
        />
      </div>
    </div>
  );
}

export default Form;
