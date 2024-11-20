import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from "../slices/todoSlice`"

const AddTask:React.FC = () => {


    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        // dispatch({type: 'addTodo', payload: input}); //?  without importing addtodo
        dispatch(addTodo(input));
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
                <button type="submit">Add</button>
            </form>
        </section>
    </>
  )
}

export default AddTask