import React from 'react'
import styled from 'styled-components'
import { FormikErrors, FormikValues, FormikTouched } from 'formik'

interface Props {
    name: "fullName" | "message" | "emailAddress"
    children: React.ReactChild | JSX.Element
    errors?: FormikErrors<FormikValues>
    touched?: FormikTouched<FormikValues>
}

const FormInputStyled = styled.div<{ error: boolean }>`
    margin-bottom:  10px;
    border: 2px solid ${props => props.error ? 'crimson' : 'black'};
    border-radius: 4px;
    overflow: hidden;
`

export default function FormInput({ errors, touched, children, name }: Props) {
    const isError = !!(errors && touched && (errors[name] && touched[name]))
    console.log('isError', errors)
    return (
        <FormInputStyled error={isError}>
            {children}
        </FormInputStyled>
    )
}
