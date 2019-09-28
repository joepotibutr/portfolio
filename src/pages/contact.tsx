import React from 'react'
import { Section, Button } from '../components'
import styled from 'styled-components'
import axios from 'axios'
import dotenv from 'dotenv'
import { Formik, Form, Field, FieldProps, MyFormValues } from 'formik'

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
    const [fullName, setFullname] = React.useState('')
    const [emailAddress, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [validationMsg, setValidationMsg] = React.useState('')

    const sendContactMessage = async (values: FormValues) => {
        try {
            setLoading(true)
            await axios.post(process.env.DATAFIRE!, values)
            setFullname('')
            setEmail('')
            setMessage('')
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
                {() => (
                <Form>
                    <Field>
                        {({ field }:  FieldProps<MyFormValues>) => (
                            <FormInput>
                            <TextInput {...field} required placeholder="Full name*" type="text"/>
                            </FormInput>
                        )}
                    </Field>
               
                <FormInput>
                    <TextInput value={emailAddress} onChange={(e) => setEmail(e.currentTarget.value)} required placeholder="Email*" type="email"/>
                </FormInput>
                <FormInput>
                    <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)} required style={{ padding: '5px' ,display: 'block', width: '100%',borderRadius: '4px' }} placeholder="Message*" name="" id="" cols={30} rows={10}></textarea>
                </FormInput>
                {loading ? <h1>Loading</h1> : <Button type="submit">{validationMsg ? validationMsg : 'Submit'}</Button>}
                </Form>
                )}
            </Formik>
           
            </div>
        </Section>
    )
}
