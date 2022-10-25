import React from "react";

// styles
import "./style.scss";

// components
import { useState } from "react";

export default function Todo({ handleEdit, title, id, handleDelete }) {
  const [editTodo, setEditTodo] = useState(title);
  const [isEdited, setisEdited] = useState(false);

  const changeEdit = (e) => {
    e.stopPropagation();
    handleEdit(id, editTodo);
    reset(e);
  };

  const reset = (e) => {
    e.stopPropagation();
    setEditTodo(title);
    setisEdited(false);
  };

  const editing = () => {
    setisEdited(true);
  };

  return (
    <div className="todo">
      {isEdited ? (
        <div className="changesContent">
          <input
            className="changeInput"
            onChange={(e) => setEditTodo(e.target.value)}
            type="text"
          />
          <button className="changeBtn" onClick={(e) => changeEdit(e)}>
            change
          </button>
          <button className="resetBtn" onClick={(e) => reset(e)}>
            reset
          </button>
        </div>
      ) : (
        <div>
          {title}
          <button className="editBtn" onClick={editing}>
            Edit
          </button>
          <button className="deleteBtn" onClick={() => handleDelete(id)}>
            delete
          </button>
        </div>
      )}
    </div>
  );
}
