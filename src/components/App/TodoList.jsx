import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ allTodos, handleDelete })
{
    return (
        <ul className="mt-6">
            {allTodos.map((element, index) => (
                <TodoItem key={index} element={element} handleDelete={handleDelete} />
            ))}
        </ul>
    );
}

export default TodoList;
