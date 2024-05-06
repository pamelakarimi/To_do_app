import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos]  = useState([]);

  const addTodo  = todo  =>{
    setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}])

    console.log(todos)
  }
  return (
    <div className='TodoWrapper'>
    <TodoForm  addTodo ={addTodo} />
    {todos.map((todo, index) => {
    <Todo task ={todo} key={index}/>
    })}
    
      </div>
  )
}

export default TodoWrapper