import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const Todo = ({ todo, todo: { text } }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const deleteTodoHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const completeTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <li className='bg-white flex rounded shadow-lg'>
      <div
        className={`flex-1 p-4 font-medium text-lg ${
          todo.completed ? 'line-through text-gray-300' : ''
        }`}
      >
        {text}
      </div>
      <button
        onClick={completeTodoHandler}
        className='bg-green-500 rounded-tl rounded-bl p-2 px-4 text-gray-50'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
      <button
        className='bg-red-500 rounded-tr rounded-br p-2 px-4 text-gray-50'
        onClick={deleteTodoHandler}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      </button>
    </li>
  );
};

export default Todo;
