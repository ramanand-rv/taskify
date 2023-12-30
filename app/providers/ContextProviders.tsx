'use client'

import React, { useEffect, useState } from 'react'
import { GlobalProvider } from '../context/globalProvider';

interface Props{
    children: React.ReactNode;
}
const ContextProviders = ({children}:Props) => {
    const [isReady, setIsReady] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setIsReady(true);
        }, 200);
    }, []);
    if(!isReady){
        return null;
    }

  return <GlobalProvider >{children} </GlobalProvider>
  
}

export default ContextProviders