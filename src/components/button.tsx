import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    cursor:pointer;
    border-radius: 4px;
    font-weight:bold;
    font-size: 14px;
    height: 50px;
    background: #1C5F9C;
    color: white;
    width: 150px;
    transition: .3s;
    
    &:focus {
        outline: 0;
    }

    &:hover {
        background:white;
        color:black;
        border: 1px solid black;
    }
`

const Button = ({ children, onClick, type }: { children: React.ReactChild, onClick?: () => void, type?: 'submit' }) => {
    return (
        <ButtonStyled type={type} onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button