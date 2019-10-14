import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button<{ fluid?: boolean, transparent?: boolean }>`
    cursor:pointer;
    border-radius: 4px;
    font-weight:bold;
    font-size: 14px;
    height: ${props => props.fluid ? '100%' : '45px'};
    background: #1C5F9C;
    color: white;
    width: ${props => props.fluid ? '100%' : '150px'};
    transition: .3s;
    border:none;
    
    &:focus {
        outline: 0;
    }

    &:hover {
        background:#0e2f4e;
    }

    ${props => props.transparent && `
        background: transparent;
        color: black;
    `}
`

interface IButtonProps {
    children: React.ReactNode
    onClick?: () => void,
    type?: 'submit',
    fluid?: boolean 
    transparent?: boolean
}

const Button = ({ children, onClick, type, fluid, transparent }: IButtonProps) => {
    return (
        <ButtonStyled transparent={transparent} fluid={fluid} type={type} onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button