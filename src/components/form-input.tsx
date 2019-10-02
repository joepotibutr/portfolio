import React from 'react'
import styled from 'styled-components'
import { FormikErrors, FormikValues, FormikTouched } from 'formik'

interface Props {
    name: "fullName" | "emailAddress" | "message"
    children: React.ReactChild | JSX.Element
    errors?: FormikErrors<FormikValues>
    touched?: FormikTouched<FormikValues>
}

const FormInputStyled = styled.div<{ error: boolean }>`
    border: 2px solid ${props => props.error ? 'firebrick' : 'black'};
    border-radius: 4px;
    overflow: hidden;
`

const ErrorMesssage = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: firebrick;
`

const FormField = styled.div`
    margin-bottom:  10px;
`

export default function FormInput({ errors, touched, children, name }: Props) {
    const isError = !!(errors && touched && (errors[name] && touched[name]))
    return (
        <FormField>
            <FormInputStyled error={isError}>
                {children}
            </FormInputStyled>
            {isError ? <ErrorMesssage>{errors![name]}</ErrorMesssage> : null}
        </FormField>
          
    )
}
