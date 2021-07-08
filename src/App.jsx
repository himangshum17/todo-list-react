import React from 'react';
import Form from './components/Form';
import Todos from './components/todos/Todos';
import TodoContextProvider from './contexts/TodoContext';
function App() {
  return (
    <div className='bg-blue-300 min-h-screen pt-10'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-50 text-center'>
          Todo List
        </h1>
        <TodoContextProvider>
          <Form />
          <Todos />
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
