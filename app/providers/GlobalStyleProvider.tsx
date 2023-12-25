'use client'
import React from 'react'

interface Props {
  children: React.ReactNode;
}
const GlobalStyleProvider = ({ children }: Props) => {
  return <div className='p-10 flex gap-10 max-h-full'>{children}</div>

}

export default GlobalStyleProvider