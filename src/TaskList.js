import React from "react";

const TaskList = ({ taskList, setTaskList }) => {
  const completeTask = ({ id }) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const displayTask = (task) => {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 list">
            <li key={task.id}>
              <input
                id={task.id}
                value={task.title}
                type="text"
                className="list-item"
                onChange={(e) => e.preventDefault()}
              />
            </li>
          </div>

          <div className="col-md-4">
            <button className="completebtn" onClick={() => completeTask(task)}>
              Complete
            </button>
          </div>
        </div>
      </div>
    );
  };
  return <div className="row shadow">{taskList.map(displayTask)}</div>;
};
export default TaskList;
