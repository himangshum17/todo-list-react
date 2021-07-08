import React, { useState } from 'react';
import { createContext } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={{ inputText, setInputText, todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
