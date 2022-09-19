import { createContext, useState } from "react";

export const todoContext = createContext([]);

export const TodoProvider = ({children}) => {

    const [todos, settodos] = useState([]);

    console.log(todos)

    const completeTask = (id) => {
        let updatedList = todos.map((item) => {
          if (item.id == id) {
            return { ...item, isComplete: !item.isComplete };
          }
          return item;
        });
        settodos(updatedList);
      };
    
    const values = {
        todos,
        settodos,
        completeTask
    }

    return <todoContext.Provider value={values}>{children}</todoContext.Provider>

}