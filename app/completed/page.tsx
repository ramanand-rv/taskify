'use client'

import React from 'react'
import { useGlobalState } from '../context/globalProvider'
import Tasks from '../components/Tasks/Tasks';

const page = () => {
  const {completedTasks} = useGlobalState();
  return (
    <Tasks tasks={completedTasks} title='Completed Tasks' />
  )
}

export default page