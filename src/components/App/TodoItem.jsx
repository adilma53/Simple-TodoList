import React, { useState } from 'react';

function TodoItem({ element, handleDelete })
{
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState({ content: element.content, estimateTime: element.estimateTime });

    const handleEdit = () =>
    {
        setIsEditing(true);
    };

    const handleSave = () =>
    {
        element.content = editedTodo.content;
        element.estimateTime = editedTodo.estimateTime;
        setIsEditing(false);
    };

    return (
        <li className="bg-white p-4 mb-3 rounded-lg shadow-lg flex justify-between items-center hover:shadow-xl transition duration-300">
            <div className="w-4/5">
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={editedTodo.content}
                            onChange={(e) => setEditedTodo({ ...editedTodo, content: e.target.value })}
                            className="w-full p-2 mb-2 bg-gray-100 rounded-lg focus:outline-none"
                        />
                        <input
                            type="text"
                            value={editedTodo.estimateTime}
                            onChange={(e) => setEditedTodo({ ...editedTodo, estimateTime: e.target.value })}
                            className="w-full p-2 bg-gray-100 rounded-lg focus:outline-none"
                        />
                    </div>
                ) : (
                    <>
                        <div className="text-lg font-semibold text-indigo-700">
                            {element.content}
                        </div>
                        <div className="text-gray-500">
                            Estimate Time: {element.estimateTime}
                        </div>
                    </>
                )}
            </div>
            <div className="w-1/5 flex justify-end space-x-2">
                {isEditing ? (
                    <>
                        <div className='ml-2'>
                            <button
                                onClick={handleSave}
                                className="text-indigo-600 hover:text-indigo-950 focus:outline-none"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="text-red-600 hover:text-red-800 focus:outline-none"
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleEdit}
                            className="text-indigo-600 hover:text-indigo-950 focus:outline-none"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(element)}
                            className="text-red-600 hover:text-red-800 focus:outline-none"
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </li>
    );
}

export default TodoItem;
