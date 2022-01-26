import React, { useState } from "react";
import Heading from "./Heading";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
const Input = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="container-fluid">
      <div className="main">
        <div>
          <Heading />
        </div>
        <div>
          <InputForm
            task={task}
            setTask={setTask}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>

        <div>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </div>
      </div>
    </div>
  );
};

export default Input;
