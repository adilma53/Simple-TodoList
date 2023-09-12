import React from 'react';

function TodoForm({ newTodo, setNewTodo, setAllTodosProp })
{
    const handleChange = (e) =>
    {
        setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setAllTodosProp(newTodo);

        setNewTodo({
            content: '',
            estimateTime: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <input
                    name="content"
                    value={newTodo.content}
                    placeholder="Add a task..."
                    onChange={handleChange}
                    type="text"
                    className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <input
                    name="estimateTime"
                    value={newTodo.estimateTime}
                    placeholder="Estimate Time (e.g., 30 mins)"
                    onChange={handleChange}
                    type="text"
                    className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-lg transition-transform transform hover:scale-105"
            >
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;
