import React, { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../../contexts/TodoContext';

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <ul className='mt-6 max-w-screen-sm mx-auto space-y-4'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
