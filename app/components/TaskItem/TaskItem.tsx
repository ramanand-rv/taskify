'use client'

import { edit, trash } from '@/app/utils/Icons';
import React from 'react'

interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: string;
    isImportant: string;
    id: string;
}

const TaskItem = ({ title, description, date, isCompleted, isImportant }: Props) => {
    return (
        <div>

            <h2>{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
            <div className="task-footer">
                {isCompleted ? (
                    <button className='completed'>Completed</button>
                ) : (
                    <button className='incomplete'>Incomplete</button>
                )}
                <button className='edit'>{edit}</button>
                <button className='delete'>{trash}</button>
            </div>
        </div>
    )
}

export default TaskItem