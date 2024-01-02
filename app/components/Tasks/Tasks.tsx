'use client'

import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react'
import styled from 'styled-components';
import CreateContent from '../Modals/CreateContent';
import TaskItem from '../TaskItem/TaskItem';
import { add } from '@/app/utils/Icons';

interface Props{
    title: string;
    tasks: any[];
}

const Tasks = ({title, tasks}:Props) => {
    const {theme} = useGlobalState();
    return <TaskStyled theme={theme}>
        <h1>{title}</h1>
        <div className="tasks grid">
            {
                tasks.map((task)=>(
                    <TaskItem 
                    key={task.id} 
                    isCompleted ={task.completed}
                    isImportant={task.important}
                    title={task.title}
                    description={task.description}
                    id={task.id}
                    date={task.date}
                    
                    />
            ))}
            <button className="create-task">
                {add}
                Add New Task
            </button>
        </div>
    </TaskStyled>
}

const TaskStyled = styled.main`
    width: 100%;
    background-color: ${(props)=> props.theme.colorBg2};
    border: 2px solid ${(props)=> props.theme.borderColor2};
    border-radius: 1rem;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    >h1{
        margin: 1rem 1rem 1rem;
        font-weight: 800;
        position: relative;
        font-size: clamp(1.5rem, 2vw, 2rem);
    }

    .create-task{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: 16rem;
        color: ${(props)=> props.theme.colorGrey2};
        font-weight: 600;
        cursor: pointer;
        border-radius: 1rem;
        border: 2px dashed ${(props)=> props.theme.colorGrey5};
        transition: all ease 0.3s;

        &:hover{
            background-color: ${(props)=> props.theme.colorGrey5};
            color: ${(props)=> props.theme.colorGrey0};
        }
    }

    .tasks{
        margin: 1rem 2rem;
    }

    

`;
export default Tasks;