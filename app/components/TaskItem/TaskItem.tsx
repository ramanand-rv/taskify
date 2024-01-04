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

const TaskItem = ({ id, title, description, date, isCompleted, isImportant }: Props) => {
    const {theme, deleteTask} = useGlobalState();
    return (
        <TaskItemStyled theme={theme} className='task-tile'>

            <h1 className='title capitalize'>{title}</h1>
            <p className='desc'>{description}</p>
            <p className='date'>{formateDate(date)}</p>
            <div className="task-footer">
                {isCompleted ? (
                    <button className='completed'>Completed</button>
                ) : (
                    <button className='incomplete'>Incomplete</button>
                )}
                <button className='edit'>{edit}</button>
                <button className='delete'
                onClick={()=>{deleteTask(id)}}>{trash}</button>
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

    >h1{
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .task-footer{
        display: flex;
        align-items: center;
        gap: 1.2rem;
        /* justify-content: space-between; */
    }

    button{
        border: none;
        outline: none;
        cursor: pointer;
    }

    .edit {
        font-size: 1.5rem;
        margin-left: auto;
        color: ${(props)=> props.theme.colorGrey2};
        transition: all 0.3s ease;
        &:hover{
            color: #8080ff;
            scale: 1.2;
        }
    }
    .delete{
        font-size: 1.5rem;
        color: ${(props)=> props.theme.colorGrey2};
        transition: all 0.2s ease;
        &:hover{
            color: #f83c3c;
            scale: 1.2;
        }
    }

    .completed,
    .incomplete {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: ${(props)=> props.theme.colorDanger};
        border-radius: 2rem;
    }

    .completed{
        background-color: green};
    }
    .incomplete{
        background-color: orange};
    }
    


`;
export default TaskItem