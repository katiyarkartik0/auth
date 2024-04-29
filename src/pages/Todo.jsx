import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = (id) => {
    const duplicateArray = [...todos];

    const narr = [];

    for (let i = 0; i < duplicateArray.length; i++) {
      const current = duplicateArray[i];
      if (current.id === id) {
        current.isCompleted = !current.isCompleted;
      }
      narr.push(current);
    }

    setTodos(narr);
  };

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button
        onClick={() => {
          setTodos((prev) => {
            return [
              ...prev,
              { id: new Date().valueOf(), input: input, isCompleted: false },
            ];
          });
        }}
      >
        Add todo
      </button>
      <br></br>
      <button>All</button>
      <button >Completed</button>
      <button>Pending</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              onClick={() => {
                handleClick(todo.id);
              }}
              className={todo.isCompleted ? "completed" : ""}
            >
              {todo.input}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
