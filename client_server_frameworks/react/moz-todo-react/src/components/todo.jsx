import React from "react";

function Todo(props) {
  return (
    <div>
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="{props.id}" type="checkbox" defaultChecked= {props.completed}/>
          <label className="todo-label" htmlFor="todo-0">
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" className="btn btn__danger" onClick={() => alert("Deleted")}>
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    </div>
  );
}
export default Todo;
