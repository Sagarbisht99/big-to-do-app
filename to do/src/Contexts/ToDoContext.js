import { createContext, useContext } from "react";

export const toDoContext = createContext({
   todos : [
    {
        id : 1,
        todo : "sagar bisht",
        completed : false ,
    }
   ],
   addTodo : (todo) => {},
   updateTodo : (todo , i) => {},
   deleteTodo : (id) => {},
   toggleComplete : (id) => {}

});

export default function useTodo()  {
    return useContext(toDoContext)
};

export const ToDoProvider = toDoContext.Provider;

