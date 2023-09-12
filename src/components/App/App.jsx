import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Bin from '../Bin/Bin';

function AppContainer()
{
    const [newTodo, setNewTodo] = useState({
        content: '',
        estimateTime: '',
    });

    const [allTodos, setAllTodos] = useState([]);
    const [deletedTodos, setDeletedTodos] = useState([]);

    const setAllTodosProp = (newTodo) =>
    {
        setAllTodos([...allTodos, newTodo]);
    };

    const handleDelete = (deletedTodo) =>
    {
        const updatedTodos = allTodos.filter((todo) => todo !== deletedTodo);
        setAllTodos(updatedTodos);

        setDeletedTodos([...deletedTodos, deletedTodo]);
    };

    const handleRestore = (restoredTodo) =>
    {
        const updatedDeletedTodos = deletedTodos.filter((todo) => todo !== restoredTodo);
        setDeletedTodos(updatedDeletedTodos);

        setAllTodos([...allTodos, restoredTodo]);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
                Your To-Do List
            </h1>
            <TodoForm
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                setAllTodosProp={setAllTodosProp}
            />
            <TodoList allTodos={allTodos} handleDelete={handleDelete} />
            <Bin deletedTodos={deletedTodos} handleRestore={handleRestore} />
        </div>
    );
}

export default AppContainer;
