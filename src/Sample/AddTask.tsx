import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from "../slices/todoSlice`";
import { IoMdAdd } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
const AddTask:React.FC = () => {


    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        // dispatch({type: 'addTodo', payload: input}); //?  without importing addtodo
        dispatch(addTodo(input));
        toast.success('A new task added into list', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setInput('');
    }

  return (
    <>
        <header>
            <h1>Todo-List</h1>
        </header>
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="Add a task" 
                    name='addTask' 
                    id='addTask'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                <button type="submit"><IoMdAdd />
                </button>
            </form>
        </section>
    </>
  )
}

export default AddTask