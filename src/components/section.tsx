import React from 'react'
import styled from 'styled-components'

interface Props {
    height: number;
    mobile?: number;
    children?: React.ReactChild | React.ReactNode;
}

interface SectionStyleProps {
    mobile?: number
    height: number
}

const SectionStyled = styled.section<SectionStyleProps>`
    display: flex;
    justify-content: start;
    align-items: start;        
    flex-direction: column;
    height: ${(props) => props.height}vh; 
    margin-top: 100px;

    @media only screen and (max-width: 720px) {
        height: ${(props) => props.mobile ? props.mobile : 90}vh; 
    }
`

export default function Section({ children, height, mobile }: Props) {
    return (
        <SectionStyled mobile={mobile} height={height}>
            {children}
        </SectionStyled>
    )
}
