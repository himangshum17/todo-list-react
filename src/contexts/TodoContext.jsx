import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredToodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filteredTodosHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filteredTodosHandler();
  }, [todos, status]);

  return (
    <TodoContext.Provider
      value={{
        inputText,
        setInputText,
        todos,
        setTodos,
        setStatus,
        filteredToodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
