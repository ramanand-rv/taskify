'use client'

import React from 'react'
import Tasks from '../components/Tasks/Tasks'
import { useGlobalState } from '../context/globalProvider'

const page = () => {
  const {importantTasks} = useGlobalState();
  return (
    <Tasks tasks={importantTasks} title={'Important Tasks'} />
  )
}

export default page