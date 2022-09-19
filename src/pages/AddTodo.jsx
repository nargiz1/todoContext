import React, {useState, useContext} from 'react'
import { todoContext } from '../TodoContext'
import { Link } from "react-router-dom";


function AddTodo() {

    const { todos, settodos } = useContext(todoContext)

    const [todo, setTodo] = useState({
        id: 0,
        text: '',
        isComplete: false
    });
    const addTodo = (e) =>{
        e.preventDefault()
        settodos([...todos, todo])
    }

    return (
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/add'>Add</Link>
            <Link to='/completed'>Completed</Link>
        </nav>
            <form onSubmit={(e)=> addTodo(e)}>
                <input type='text' onChange={(e)=> setTodo({text : e.target.value, isComplete: true, id: Math.floor(Math.random() *1000000)})}/>
                <button type='submit'>Add</button>
            </form>
        
        </>
    )
}

export default AddTodo