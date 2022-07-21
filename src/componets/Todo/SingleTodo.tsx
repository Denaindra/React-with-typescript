import React, { useState } from "react";
import { Todo } from "../../models/Todo";
import "../../assets/styles/styles.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => todo.id == id ? { ...todo, isDone: !todo.isDone } : todo)
    );
  };

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter(todo=>todo.id !== id)
    );
  };

  const handleEdit = (id: number) => {
    edit ? setEdit(false):setEdit(true)

  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (

        edit ? (
            <input type="text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} name="Edittodo" className="todos__single--text"/>
            ) : (<span className="todos__single--text">{todo.todo}</span>) 
      )}
      <div></div>

      <span className="icon">
        <AiFillEdit onClick={()=>handleEdit(todo.id)}/>
      </span>
      <span className="icon">
        <AiFillDelete onClick={()=>handleDelete(todo.id)} />
      </span>
      <span className="icon">
        <MdDone onClick={() => handleDone(todo.id)} />
      </span>
    </form>
  );
};

export default SingleTodo;
