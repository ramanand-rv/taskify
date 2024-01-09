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

  const [modal, setModal] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const {user} = useUser();

  const collapseMenu = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  }

  const allTasks = async () =>{
    setIsLoading(true);
    try {
      const res = await axios.get('/api/tasks');
      const sortedTasks = res.data.sort((a,b)=> {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      // console.log(sortedTasks);
      setTasks(sortedTasks);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
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
      // console.log(error);
      toast.error('Something went wrong');
    }
  }

  const updateTask = async (task) => {
    try {
      const res = await axios.put(`/api/tasks`,task);
      toast.success('Task updated');
      allTasks();
    } catch (error) {
      // console.log(error);
      toast.error('Something went wrong');
    }
  }

  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  const completedTasks = tasks.filter((task)=> task.isCompleted === true);
  const importantTasks = tasks.filter((task)=> task.isImportant === true);
  const todoTasks = tasks.filter((task)=> task.isCompleted === false);


  return (
    <GlobalContext.Provider value={{theme, tasks, deleteTask, isLoading, completedTasks, importantTasks, todoTasks, updateTask, modal, openModal, closeModal, allTasks, sidebarCollapsed, collapseMenu}}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalContext);
// export const useGlobalUpdate = () => useContext(GlobalUpdateContext);