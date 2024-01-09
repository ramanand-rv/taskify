'use client'
import { useGlobalState } from '@/app/context/globalProvider'
import { burger, leftArrow, signout } from '@/app/utils/Icons'
import { menu } from '@/app/utils/menu'
import { useClerk } from '@clerk/clerk-react'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styled from 'styled-components'
import Button from '../Button/Button'
// function handleClick(link: string) {
//   console.log('Function not implemented.')
// }


const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { signOut } = useClerk();

  const { user } = useUser();
  const { fullName, imageUrl } = user || {
    fullName: '',
    imageUrl: '/unnamed.jpg'
  };
  // console.log(user);

  const { theme, sidebarCollapsed, collapseMenu } = useGlobalState();
  return <SidebarStyles theme={theme} collapsed={sidebarCollapsed}>
    <button className='toggle-nav animate-pulse border-[1px] border-slate-600 rounded-md'
      onClick={collapseMenu}>
      {sidebarCollapsed ? burger : leftArrow}
    </button>
    <div className="profile">
      <div className="profile-overlay"></div>
      <div className="image items-center">
        <Image width={70} height={70} src={imageUrl} alt="profile" />
      </div>
      <div className="user-btn absolute z-20 top-0 w-full h-full">
        <UserButton />
      </div>
      <h1 className="capitalize">
        {fullName}
      </h1>
    </div>
    <ul className="nav-items justify-center mb-8">
      {menu.map((item) => {
        const link = item.link;
        return (
          <li
            key={item.id}
            className={`nav-item ${pathname === link ? "active" : ""}`}
          // onClick={() => {
          //   handleClick(link);
          // }}
          >
            <div className="i">{item.icon}</div>
            <Link href={link}>{item.title}</Link>
          </li>)
      })}
    </ul>
    <div className=" h-full flex items-end justify-center w-full text-center ">
      <div className="sign-out p-2 border-[1px] border-slate-700 rounded-lg mb-[42px] w-full
        hover:border-slate-500 transition-all duration-200">
        <Button
          name={'Sign Out'}
          type={'submit'}
          padding={'0.4rem 0.8rem'}
          borderRad={'0.4rem'}
          fw={'500'}
          fs={'1.2rem'}
          icon={signout}
          click={() => {
            signOut();
            router.push('/signin')
          }}
        />
      </div>
    </div >
  </SidebarStyles >
}

const SidebarStyles = styled.nav<{ collapsed: boolean }>`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  overflow-wrap:break-word;

  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colorGrey3};

  @media screen and (max-width: 768px) {
    position: fixed;
    height: calc(100vh - 4rem);
    z-index: 100;

    transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);

    .toggle-nav{
      display: block !important;
    }
  }

  transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);
  transform: ${(props) => props.collapsed ? 'translateX(-120%)' : 'translate(0)'};

  .toggle-nav{
    display: none;
    position: absolute;
    right: -116px;
    top: -24px;
    padding: 0.3rem;

    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;

    background-color: ${(props) => props.theme.colorBg2};
    font-size: 2rem;

  }

  /* @media screen and (max-width: 768px) {
    position: fixed;
    height: calc(100vh - 4rem);
    z-index: 100;

    transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);
  } */

  .user-btn{
    .cl-rootBox{
      width: 100%;
      height: 100%;

      .cl-userButtonBox {
        width: 100%;
        height: 100%;
        
        .cl-userButtonTrigger{
          width: 100%;
          height: 100%;
          opacity: 0;

        }
      }
    }
  }

  .profile {
    margin: 1rem;
    padding: 1rem 0.8rem;
    position: relative;
    overflow: hidden;

    border-radius: 1rem;
    cursor: pointer;

    font-weight: 400;
    color: ${(props) => props.theme.colorGrey0};

    display: flex;
    align-items: center;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all 0.55s linear;
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};

      opacity: 0.2;
    }

    h1 {
      font-size: 1rem;
      display: flex;
      flex-direction: column;
    }

    .image,
    h1 {
      position: relative;
      z-index: 1;
    }

    .image {
      flex-shrink: 0;
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;

      width: 70px;
      height: 70px;

      img {
        border-radius: 100%;
        transition: all 0.5s ease;
      }
    }

    > h1 {
      margin-left: 0.8rem;
      font-size: clamp(1.2rem, 4vw, 1.4rem);
      line-height: 100%;
    }

    &:hover {
      .profile-overlay {
        opacity: 1;
        border: 2px solid ${(props) => props.theme.borderColor2};
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  .nav-item {
    position: relative;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;

    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;
    align-items: center;                                                                       

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) => props.theme.activeNavLinkHover};
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.colorGreenDark};

      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      z-index: 2;
      line-height: 0;
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorIcons};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.activeNavLink};

    .i,
    a {
      color: ${(props) => props.theme.colorIcons2};
    }
  }

  .active::before {
    width: 0.3rem;
  }

  > button {
    margin: 1.5rem;
  }

  .sign-out{
    position: relative;
    align-items: center;
    justify-content: center;
  }

`;
export default Sidebar