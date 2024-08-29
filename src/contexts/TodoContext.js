import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // structure of a todo task
    todos: [
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
    // these are the methods which will run on the todo tasks
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;