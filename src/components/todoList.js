

import React from 'react';



// purely presentaiton componenet 
//  the <li></li>
const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li 
  onClick={onClick}
  style={{
    textDecoration:
      completed ?
        'line-through' :
        'none'
  }}
  >
    {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => {

  if (todos === undefined) {
    return (
      <ul></ul>
    );
  }

  return (
  <ul>
    {todos.map(todo => 
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  )
}

 


export default TodoList;