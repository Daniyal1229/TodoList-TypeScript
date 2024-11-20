import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
        id: string;
        text: string;
        completed: boolean;
    }

interface TodosType {
    todos: Todo[]       //? we just need a array of todos [{id,text,completed},{id,text,completed}]
}

const initialState:TodosType = {  //? initial state of todoType
    todos: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,    
    reducers: {
        addTodo: (state, action:PayloadAction<string>) => {
            const newTodo = {
                id: Date.now().toString(),
                text: action.payload,
                completed: false
            }
            state.todos.push(newTodo);
        },
        toggleTodo: (state, action:PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action:PayloadAction<{id:string,text:string}>) => {
          const {id, text} = action.payload;
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) {   
            todo.text = text;
          }
        },  
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },      
    },
    })

export const { addTodo, toggleTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
