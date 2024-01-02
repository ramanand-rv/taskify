'use client'

import { useGlobalState } from '@/app/context/globalProvider';
import { edit, trash } from '@/app/utils/Icons';
import React from 'react'
import styled from 'styled-components';
import formateDate from '@/app/utils/FormatDate';

interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: string;
    isImportant: string;
    id: string;
}

const TaskItem = ({ title, description, date, isCompleted, isImportant }: Props) => {
    const {theme} = useGlobalState();
    return (
        <TaskItemStyled theme={theme} className='task-tile'>

            <h2 className='title capitalize'>{title}</h2>
            <p className='desc'>{description}</p>
            <p className='date'>{formateDate(date)}</p>
            <div className="task-footer">
                {isCompleted ? (
                    <button className='completed'>Completed</button>
                ) : (
                    <button className='incomplete'>Incomplete</button>
                )}
                <button className='edit'>{edit}</button>
                <button className='delete'>{trash}</button>
            </div>
        </TaskItemStyled>
    )
}

const TaskItemStyled = styled.div`
    padding: 1.2rem 1rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.borderColor2};
    box-shadow: ${(props) => props.theme.shadow7};
    border: 2px solid ${(props) => props.theme.borderColor2};
    height: 16rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;

    .task-tileP{
        margin: 0 1rem;
    }

    .date{
        margin-top: auto;
    }

    


`;
export default TaskItem