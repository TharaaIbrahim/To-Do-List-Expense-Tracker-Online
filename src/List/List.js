import React, { useEffect, useState } from "react";
import "./List.css";

function List({ newTask, setNewTask, setToDoArr, toDoArr }) {
  const [listEdit, setListEdit] = useState(null);

  const checkHandler = ({ id }) => {
    setToDoArr(
      toDoArr.map((task) => {
        if (task.id === id) {
          return { ...task, check: !task.check };
        }
        return task;
      })
    );
  };

  const editHandler = ({ id }) => {
    const item = toDoArr.find((task) => task.id === id);
    setListEdit(item);
  };
  // useEffect(() => {
  //   // const newToDo = JSON.parse(localStorage.getItem("toDoList"));
  //   // newToDo.push(...toDoList);
  //   // localStorage.setItem("toDoList", JSON.stringify(newToDo));
  //   toDoList = toDoArr;
  // }, [toDoArr]);

  const removeHandler = ({ id }) => {
    setToDoArr(toDoArr.filter((task) => task.id !== id));
  };

  return (
    <div>
      {toDoArr ? (
        toDoArr.map((task) => {
          return (
            <div key={task.id}>
              <input
                className={task.check ? "field checked" : "field unChecked"}
                type="text"
                name="newTask"
                onChange={(e) => {
                  e.preventDefault();
                }}
                value={task.task.newTask}
                placeholder="Add Your New Task"
                required
              />
              <button onClick={() => checkHandler(task)}>
                <i className="fas fa-check check" />
              </button>
              <button
                onClick={() => {
                  removeHandler(task);
                }}
              >
                <i className="fas fa-trash-alt remove" />
              </button>
              <button onClick={() => editHandler(task)}>
                <i class="fas fa-edit" />
              </button>
            </div>
          );
        })
      ) : (
        <div>NO Tasks</div>
      )}
    </div>
  );
}

export default List;
