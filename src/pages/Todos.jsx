import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { todoContext } from '../TodoContext'
import TodoItem from '../components/todoItem'

function Todos() {
    const { todos, settodos } = useContext(todoContext)
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/add'>Add</Link>
                <Link to='/completed'>Completed</Link>
            </nav>

            <table>
                <thead>
                    <tr>
                        <th>ToDo</th>
                        <th>IsComplete?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.text}</td>
                                <td><input type='checkbox' /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Todos