import React, { useState } from "react";
import "../assets/styles/Home.css";
import InputField from "../componets/InputField";
import TodoList from "../componets/Todo/TodoList";
import { Todo } from "../models/Todo";

function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Home Page</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default Home;
