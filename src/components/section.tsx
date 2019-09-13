import React from 'react'
import styled from 'styled-components'

interface Props {
    height: number;
    children?: React.ReactChild | React.ReactNode;
}

interface SectionStyleProps {
    height: number
}

const SectionStyled = styled.section<SectionStyleProps>`
    display: flex;
    justify-content: start;
    align-items: center;        
    flex-direction: column;
    height: ${(props) => props.height}vh; 
    margin-top: 100px;
`

export default function Section({ children, height }: Props) {
    return (
        <SectionStyled height={height}>
            {children}
        </SectionStyled>
    )
}
