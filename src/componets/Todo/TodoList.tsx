import React from 'react';
import { Todo } from '../../models/Todo';
import '../../assets/styles/styles.css'
import SingleTodo from './SingleTodo';


interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const TodoList:React.FC<Props> = ({todos,setTodos}) =>{
    return(<div className='todos'>{
        todos.map((t) => (
          <SingleTodo todo={t} setTodos={setTodos} todos={todos} key={t.id}/>
        ))
      } </div>);
}

export default TodoList;