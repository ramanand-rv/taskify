'use client'
import React from 'react'
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const GlobalStyleProvider = ({ children }: Props) => {
  return <GlobalStyles>{children}</GlobalStyles>
}

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100vh;

  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;
export default GlobalStyleProvider;