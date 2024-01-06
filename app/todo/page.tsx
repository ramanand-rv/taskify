'use client'

import React from 'react'
import { useGlobalState } from '../context/globalProvider'
import Tasks from '../components/Tasks/Tasks';

const page = () => {
  const {todoTasks} = useGlobalState();
  return (
    <Tasks tasks={todoTasks} title={'To DO Tasks'} />
  )
}

export default page