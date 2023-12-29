'use client'
import { useGlobalState } from '@/app/context/globalProvider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { menu } from '@/app/utils/menu';


const Sidebar = () => {
  const { theme } = useGlobalState();
  return <SidebarStyles theme={theme}>
    <div className="profile">
      <div className="profile-overlay">
        <div className="image">
          <Image alt='profile' src={'/unnamed.jpg'} width={70} height={70} />
        </div>
        <h1>
          <span>Tony</span>
          <span>Stark</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item)=>{return <li key={item.id}>
          {item.icon}
          <Link href={item.link}>{item.title}</Link>
        </li>})}
      </ul>
    </div>
  </SidebarStyles>
}

const SidebarStyles = styled.nav`
  position: relative;   
  width: ${(props) => props.theme.borderWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;
export default Sidebar