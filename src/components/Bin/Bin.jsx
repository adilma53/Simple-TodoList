import React from 'react';

function Bin({ deletedTodos, handleRestore })
{
    return (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Deleted Todos</h2>
            <ul className="space-y-2">
                {deletedTodos.map((todo, index) => (
                    <li
                        key={index}
                        className="bg-gray-200 p-3 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-300 transition duration-300"
                    >
                        <span className="text-gray-700">{todo.content}</span>
                        <button
                            onClick={() => handleRestore(todo)}
                            className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
                        >
                            Restore
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bin;
