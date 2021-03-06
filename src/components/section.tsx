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
    background: #fafafa;
    padding: 50px 20px 0 20px;;
    display: flex;
    justify-content: start;
    align-items: center;        
    flex-direction: column;
    height: ${(props) => props.height * 100}px; 

    @media only screen and (max-width: 576px) {
        min-height: ${(props) => props.mobile ? props.mobile : 650}px; 
    }
`

export default function Section({ children, height, mobile }: Props) {
    return (
        <SectionStyled mobile={mobile} height={height}>
            {children}
        </SectionStyled>
    )
}
