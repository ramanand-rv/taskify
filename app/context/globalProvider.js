'use client';
import React, { createContext, useContext, useEffect, useState } from 'react'
import themes from './theme';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useUser } from '@clerk/nextjs';

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const {user} = useUser();

  const allTasks = async () =>{
    setIsLoading(true);
    try {
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    allTasks();
  }, [user]);

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
      toast.success('Task deleted successfully');
      allTasks();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  const completedTasks = tasks.filter((task)=> task.isCompleted === true);
  const importantTasks = tasks.filter((task)=> task.isImportant === true);
  const todoTasks = tasks.filter((task)=> task.isCompleted === false);


  return (
    <GlobalContext.Provider value={{theme, tasks, deleteTask, isLoading, completedTasks, importantTasks, todoTasks}}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalContext);
// export const useGlobalUpdate = () => useContext(GlobalUpdateContext);