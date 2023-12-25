import React from 'react'

interface Props{
  children: React.ReactNode;
}
const GlobalStyleProvider = ({children}: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default GlobalStyleProvider