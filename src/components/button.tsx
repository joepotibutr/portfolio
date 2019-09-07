import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    cursor:pointer;
    border-radius: 4px;
    font-weight:bold;
    font-size: 14px;
    height: 50px;
    background: black;
    color: white;
    width: 150px;
`

const Button = ({ children, onClick }: { children: React.ReactChild, onClick?: () => void }) => {
    return (
        <ButtonStyled onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button