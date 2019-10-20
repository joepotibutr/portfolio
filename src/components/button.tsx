import React from 'react'
import styled from 'styled-components'

const buttonSize = {
    fluid: {
        width: '100%',
        height: '100%'
    },
    normal: {
        width: '150px',
        height: '45px'
    },
    small: {
        width: '130px',
        height: '40px'
    }
}

const ButtonStyled = styled.button<IButtonProps>`
    cursor:pointer;
    border-radius: 4px;
    font-weight:bold;
    font-size: 14px;
    height: ${props => buttonSize[props.size!].height};
    background: #1C5F9C;
    color: white;
    width: ${props => buttonSize[props.size!].width};
    transition: .3s;
    border:none;
    
    &:focus {
        outline: 0;
    }

    &:hover {
        background:#0e2f4e;
    }

    ${props => props.disabled && `
         pointer-events: none;
        opacity: 0.5;
        filter: contrast(0.5);
    `}

   

    ${props => props.transparent && `
        background: transparent;
        color: black;
        &:hover {
            color: gray;
            background:transparent;
        }
    `}
`

interface IButtonProps {
    disabled?:boolean
    children: React.ReactNode
    onClick?: () => void,
    type?: 'submit',
    size?: 'fluid' | 'small' | 'normal'
    transparent?: boolean
}

const Button = (props : IButtonProps) => {
    return (
        <ButtonStyled {...props}>
            {props.children}
        </ButtonStyled>
    )
}

Button.defaultProps = {
    size: 'normal'
}

export default Button