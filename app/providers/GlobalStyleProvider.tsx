import React from 'react'

interface Props{
  children: React.ReactNode;
}
const GlobalStyleProvider = ({children}: Props) => {
  return 
    <GlobalStyles>
      {children}
    </GlobalStyles>
  
}

const GlobalStyles = styled.div``;
export default GlobalStyleProvider