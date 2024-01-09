"use client";
import { useGlobalState } from "@/app/context/globalProvider";

import React from "react";
import styled from "styled-components";

interface Props {
  icon?: React.ReactNode;
  name?: string;
  background?: string;
  padding?: string;
  borderRad?: string;
  fw?: string;
  fs?: string;
  click?: () => void;
  type?: "submit" | "button" | "reset" | undefined;
  border?: string;
  color?: string;
}

function Button({
  icon,
  name,
  background,
  padding,
  borderRad,
  fw,
  fs,
  click,
  type,
  border,
  color,
}: Props) {
  const { theme } = useGlobalState();

  return (
    <ButtonStyled
      className="flex gap-3 justify-center "
      theme={theme}
      type={type}
      style={{
        background: background,
        padding: padding || "0.5rem 1rem",
        borderRadius: borderRad || "0.5rem",
        fontWeight: fw || "500",
        fontSize: fs,
        border: border || "none",
        color: color || theme.colorGrey0,
      }}
      onClick={click}
    >
      <span className="i relative ml-4 items-center ">{icon && icon}</span>
      <span className="name ml-3">{name}</span>

    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorGrey2};
  z-index: 5;
  cursor: pointer;
  gap: 0.5rem;
  justify-content: center !important;

  transition: all 0.55s ease-in-out;

  .i, .name {
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: white;
    .i, .name {
      color: white;
    }
  }
`;

export default Button;