import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState   } from '../store/store';  //? state of type RootState
import { editTodo, removeTodo, toggleTodo } from '../slices/todoSlice`';
import { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';


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
        toast.warn('Editing task', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        dispatch(editTodo(currentTodo));
        toast.success('Updating task', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setEdited(!edited);
    }

  return (
    <main>

        <h2>Display Todo</h2>
        <ul>
            {
                todoList.length >= 1 ? todoList.map((todo) => (
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
                            <button type="submit"><FaChevronRight />
                            </button>
                        </form>
                    ):
                    <li key={todo.id}>
                        <input type="checkbox" 
                            name="isCompleted" id="isCompleted" 
                            checked = {todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        /> 
                        <p  style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text.substring(0,10)}</p>
                        <button  id='edit' onClick={() => handleEdit(todo)}><MdModeEdit /></button>
                        <button id='delete' onClick={() => dispatch(removeTodo(todo.id) )}><AiTwotoneDelete />
                        </button>      
                    </li>   
                ))
            : <li>
                <p>No task to display</p>
            </li>
            }
        </ul>
    </main>
  )
}

export default DisplayTodo