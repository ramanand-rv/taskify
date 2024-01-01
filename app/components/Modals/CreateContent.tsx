'use client'

import React, { useState } from 'react'


const CreateContent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [complete, setComplete] = useState(false);
    const [important, setImportant] = useState(false);

    const handleChange = (name: string ) =>(e: any) =>{
        switch(name){
            case 'title':
                setTitle(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'complete':
                setComplete(e.target.checked);
                break;
            case 'important':
                setImportant(e.target.checked);
                break;
            default:
                return;
        }
        console.log(name, e.target.value);
        console.log(title, description, date, complete, important);
        return;
    }   

  return (
    <div>
        <h1>Create a Task</h1>
        <div className="input-control">
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder='Watch CP revision videos' 
            value={title}
            onChange={handleChange('title')} />
        </div>

        
        <div className="input-control">
            <label htmlFor="description">Description</label>
            <input 
            type="text" 
            name="description" 
            id="description" 
            value={description}
            onChange={handleChange('description')} />
        </div>

        <div className="input-control">
            <label htmlFor="date">Date</label>
            <input 
            type="date" 
            name="date" 
            id="date" 
            placeholder='Watch CP revision videos' 
            value={date.toString()}
            onChange={handleChange('date')} />
        </div>

        <div className="input-control">
            <label htmlFor="complete">Toggle Completed</label>
            <input 
            type="checkbox" 
            name="complete" 
            id="complete" 
            placeholder='Watch CP revision videos' 
            value={complete.toString()}
            onChange={handleChange('complete')} />
        </div>

        <div className="input-control">
            <label htmlFor="important">Toggle Important</label>
            <input 
            type="checkbox" 
            name="important" 
            id="important" 
            placeholder='Watch CP revision videos' 
            value={important.toString()}
            onChange={handleChange('important')} />
        </div>


    </div>
  )
}

export default CreateContent