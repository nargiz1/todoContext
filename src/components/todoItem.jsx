import React from 'react'

function TodoItem(todo) {
  return (
    <>
        <tr>
            <td>{todo.text}</td>
            <td><input type='checkbox' value={todo.isComplete}/></td>
        </tr>
    </>
  )
}

export default TodoItem