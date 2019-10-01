import React from 'react'
import styled from 'styled-components'

interface Props {
    errorMsg?: string
    children: React.ReactChild | JSX.Element
}

const FormInputStyled = styled.div`
    margin-bottom:  10px;
`

export default function FormInput(props: Props) {
    return (
        <FormInputStyled>
            {props.errorMsg}
            {props.children}
        </FormInputStyled>
    )
}
