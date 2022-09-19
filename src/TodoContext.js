import { createContext, useState } from "react";

export const todoContext = createContext([]);

export const TodoProvider = ({children}) => {

    const [todos, settodos] = useState([]);

    console.log(todos)
    
    const values = {
        todos,
        settodos
    }

    return <todoContext.Provider value={values}>{children}</todoContext.Provider>

}