'use client'
import { useGlobalState } from '@/app/context/globalProvider'
import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  const {theme} = useGlobalState();
  return <SidebarStyles theme={theme}>Sidebar</SidebarStyles>
}

const SidebarStyles = styled.nav`
  position: relative;   
  width: ${(props)=>props.theme.borderWidth};
  background-color: ${(props)=>props.theme.colorBg2};
  border: 2px solid ${(props)=>props.theme.borderColor2};
  border-radius: 1rem;
`;
export default Sidebar