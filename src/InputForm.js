import React from "react";

const InputForm = ({ task, taskList, setTask, setTaskList }) => {
  const updateTask = (e) => {
    setTask(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { id: Math.random(), title: task }]);
    setTask("");
  };
  return (
    <form onSubmit={addTask}>
      <div className="row">
        <div className="col-md-7">
          <input
            id="name"
            type="text"
            value={task}
            placeholder="Enter Task"
            className="textbox"
            onChange={updateTask}
            required
          />
        </div>
        <div className="col-md-5">
          <button className="submitbtn">Add Task</button>
        </div>
      </div>
    </form>
  );
};
export default InputForm;
