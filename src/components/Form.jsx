import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
const Form = () => {
  const { inputText, setInputText, todos, setTodos } = useContext(TodoContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text: inputText,
        completed: false,
      },
    ]);
    setInputText('');
  };

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className='mt-10 max-w-screen-sm mx-auto shadow-2xl'
    >
      <div className='relative'>
        <input
          className='h-14 w-full rounded py-2 px-4 focus:outline-none focus:ring-4 ring-purple-500 text-xl font-semibold text-gray-700'
          type='text'
          name='todo'
          id='todo'
          placeholder='Add Todos'
          onChange={inputChangeHandler}
          value={inputText}
        />
        <button
          type='submit'
          className='absolute transform top-1/2 -translate-y-1/2 right-4 text-gray-500'
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
              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;
