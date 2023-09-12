// import React, { useState } from 'react';

// function Bin({ deletedTodos, handleRestore })
// {
//   return (
//     <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Deleted Todos</h2>
//       <ul className="space-y-2">
//         {deletedTodos.map((todo, index) => (
//           <li
//             key={index}
//             className="bg-gray-200 p-3 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-300 transition duration-300"
//           >
//             <span className="text-gray-700">{todo.content}</span>
//             <button
//               onClick={() => handleRestore(todo)}
//               className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
//             >
//               Restore
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App()
// {
//   const [newTodo, setNewTodo] = useState({
//     content: '',
//     estimateTime: '',
//   });

//   const [allTodos, setAllTodos] = useState([]);
//   const [deletedTodos, setDeletedTodos] = useState([]);

//   const setAllTodosProp = (newTodo) =>
//   {
//     setAllTodos([...allTodos, newTodo]);
//   };

//   const handleDelete = (deletedTodo) =>
//   {
//     const updatedTodos = allTodos.filter((todo) => todo !== deletedTodo);
//     setAllTodos(updatedTodos);

//     setDeletedTodos([...deletedTodos, deletedTodo]);
//   };

//   const handleRestore = (restoredTodo) =>
//   {
//     const updatedDeletedTodos = deletedTodos.filter((todo) => todo !== restoredTodo);
//     setDeletedTodos(updatedDeletedTodos);

//     setAllTodos([...allTodos, restoredTodo]);
//   };

//   const handleChange = (e) =>
//   {
//     setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) =>
//   {
//     e.preventDefault();
//     setAllTodosProp(newTodo);

//     setNewTodo({
//       content: '',
//       estimateTime: '',
//     });
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
//           Your To-Do List
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               name="content"
//               value={newTodo.content}
//               placeholder="Add a task..."
//               onChange={handleChange}
//               type="text"
//               className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               name="estimateTime"
//               value={newTodo.estimateTime}
//               placeholder="Estimate Time (e.g., 30 mins)"
//               onChange={handleChange}
//               type="text"
//               className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-lg transition-transform transform hover:scale-105"
//           >
//             Add Task
//           </button>
//         </form>
//         <ul className="mt-6">
//           {allTodos.map((element, index) => (
//             <li
//               key={index}
//               className="bg-white p-4 mb-3 rounded-lg shadow-lg flex justify-between items-center hover:shadow-xl transition duration-300"
//             >
//               <div>
//                 <div className="text-lg font-semibold text-indigo-700">
//                   {element.content}
//                 </div>
//                 <div className="text-gray-500">
//                   Estimate Time: {element.estimateTime}
//                 </div>
//               </div>
//               <button
//                 onClick={() => handleDelete(element)}
//                 className="text-red-600 hover:text-red-800 focus:outline-none"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <Bin deletedTodos={deletedTodos} handleRestore={handleRestore} />
//     </div>
//   );
// }

// export default App;




import React from 'react';
import AppContainer from './components/App/App';

function App()
{
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <AppContainer />
    </div>
  );
}

export default App;


