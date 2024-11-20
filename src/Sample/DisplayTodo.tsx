import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState   } from '../store/store';  //? state of type RootState
import { editTodo, removeTodo, toggleTodo } from '../slices/todoSlice`';
import { useState } from 'react';



const DisplayTodo:React.FC = () => {

    const todoList = useSelector((state:RootState) => state.todos.todos);
    const dispatch = useDispatch();

    const [edited,setEdited] = useState(false);
    const [currentTodo,setCurrentTodo] = useState<{id:string,text:string}>({
        id: '',
        text: '',
    }) //? specifying what data we are going to store and data type to accept 

    const handleEdit = (todo:{id:string,text:string}) => {  //? specify wht type of data will be in todo
        setEdited(!edited);
        setCurrentTodo(todo);
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        dispatch(editTodo(currentTodo));
        setEdited(!edited);
    }

  return (
    <main>

        <h2>Display Todo</h2>
        <ul>
            {
                todoList && todoList.map((todo) => (
                    //? on edit insted of list item display form to edit
                    edited &&  currentTodo.id === todo.id ? (
                        <form onSubmit={handleSubmit}>
                            <input type="text" 
                                placeholder="Add a task" 
                                name='addTask' 
                                id='addTask'
                                value={currentTodo.text}
                                onChange={(e) => setCurrentTodo({...currentTodo,text:e.target.value})}
                                />
                            <button type="submit">Save</button>
                        </form>
                    ):
                    <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        <input type="checkbox" 
                            name="isCompleted" id="isCompleted" 
                            checked = {todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        /> 
                        <p>{todo.text}</p>
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>      
                    </li>   
                ))
            }
        </ul>
    </main>
  )
}

export default DisplayTodo