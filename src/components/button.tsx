import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button<{ fluid?: boolean }>`
    cursor:pointer;
    border-radius: 4px;
    font-weight:bold;
    font-size: 14px;
    height: ${props => props.fluid ? '100%' : '50px'};
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
`

interface IButtonProps {
    children: React.ReactChild,
    onClick?: () => void,
    type?: 'submit',
    fluid?: boolean 
}

const Button = ({ children, onClick, type, fluid }: IButtonProps) => {
    return (
        <ButtonStyled fluid={fluid} type={type} onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button