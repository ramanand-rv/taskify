'use client'

import Tasks from '../components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

const page = () => {
  const { completedTasks } = useGlobalState();
  return (
    <Tasks tasks={completedTasks} title='Completed Tasks' />
  )
}

export default page