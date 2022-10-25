import { useState } from "react";

// styles
import "./app.scss";

// components
import Todo from "./components/list";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const buttonAdd = () => {
    setTodo((prev) => [
      ...prev,
      {
        title: inputValue,
        id: Math.random(),
        isComppleted: false,
        isChecked: false,
      },
    ]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((title) => title.id !== id));
  };

  const handleEdit = (id, newTitle) => {
    setTodo((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  return (
    <div className="containerList">
      <div className="inputContent">
        <input
          className="input"
          onChange={handleInputValue}
          value={inputValue}
          type="text"
        />
        <button className="buttonAdd" onClick={buttonAdd}>
          Add
        </button>
      </div>
      <div className="todoList">
        {todo.map((item) => {
          return (
            <Todo
              handleEdit={handleEdit}
              key={item.id}
              handleDelete={handleDelete}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}
