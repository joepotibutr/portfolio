import React from 'react'
import { Section, Button } from '../components'
import styled from 'styled-components'
import axios from 'axios'
import dotenv from 'dotenv'
import { Formik } from 'formik'

interface FormValues {
    fullName: string,
    emailAddress: string,
    message: string
}

dotenv.config()

const FormInput = styled.div`
    margin-bottom:  10px;
`

const TextInput = styled.input`
    border-style: none;
    border: 1px solid;
    display: block;
    width: 100%;
    border-radius: 4px;
    padding: 5px;
    &:focus {
        outline: none;
    }
`

const ValidationMessage = styled.div<{ showMessage: boolean }>`
    display: ${props => props.showMessage ? 'block' : 'none'};
`

export default () => {
    const [loading, setLoading] = React.useState(false)
    const [validationMsg, setValidationMsg] = React.useState('')

    const sendContactMessage = async (values: FormValues) => {
        console.log(values)
        try {
            setLoading(true)
            await axios.post(process.env.DATAFIRE!, values)
            setValidationMsg('Sent successful')
        } catch {
            setValidationMsg('Email is not valid')
        }
        setLoading(false)
        setTimeout(() => {
            setValidationMsg('')
        }, 1000)
    }

    return (
        <Section height={70}>
            <ValidationMessage showMessage={validationMsg.length > 0}>{validationMsg}</ValidationMessage>
            <div style={{ width : '100%', height: '100%'}}>
            <h2>Contact</h2>
            <Formik 
            onSubmit={async (values: FormValues) => sendContactMessage(values)}
            initialValues={{ fullName: '', emailAddress: '', message: '' }}>
                {({ handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                <FormInput>
                    <TextInput name="fullName"  onChange={handleChange} required placeholder="Full name*" type="text"/>
                </FormInput>
                <FormInput>
                    <TextInput name="emailAddress" onChange={handleChange} required placeholder="Email*" type="email"/>
                </FormInput>
                <FormInput>
                    <textarea name="message" onChange={handleChange} required style={{ padding: '5px' ,display: 'block', width: '100%',borderRadius: '4px' }} placeholder="Message*" cols={30} rows={10}></textarea>
                </FormInput>
                {loading ? <h1>Loading</h1> : <Button type="submit">{validationMsg ? validationMsg : 'Submit'}</Button>}
                </form>
                )}
            </Formik>
           
            </div>
        </Section>
    )
}
