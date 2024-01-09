'use client'

import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react';
import styled from 'styled-components';

interface Props {
    content: React.ReactNode;
}

const Modal = ({ content }: Props) => {
    const { closeModal, theme } = useGlobalState()
    return (
        <ModalStyled theme={theme}>
            <div className="modal-overlay blur-md" onClick={closeModal}></div>
            <div className="glass -p-10" ></div>
            <div className=" p-2">
                {content}
            </div>

        </ModalStyled>
    )
}

const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    padding: 1px;

    display: flex;
    align-items: center;
    justify-content: center;


    .modal-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }

    .glass{
        position: absolute;
        width: 400px;
        height: calc(100vh - 50px);
        background: transparent;
        box-shadow: 0 25px 45px 0 rgba(0, 0, 0, 0.37);
        border-radius: 50px;

        border: 2px solid rgba(255, 255, 255, 0.5);
        border-right: 2px solid rgba(255, 255, 255, 0.2);
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);

        backdrop-filter: blur(10px);

        -webkit-box-shadow:0px 0px 242px 52px rgba(1,20,89,0.68);
        -moz-box-shadow: 0px 0px 242px 52px rgba(1,20,89,0.68);
        box-shadow: 0px 0px 242px 52px rgba(1,20,89,0.68);
    }

    .modal-content{

        padding: 2rem;
        position: relative;
        min-width: 630px;
        width: 100%;
        z-index: 500;
        border-radius: 1rem;
/* 
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); */

    }


`;


export default Modal