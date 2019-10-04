import React from 'react'
import { Section, Button, FormInput } from '../components'
import styled from 'styled-components'
import axios from 'axios'
import dotenv from 'dotenv'
import SchemaValidation from '../utils/validation'
import { Formik } from 'formik'
import { sleep } from '../utils/helper'

interface FormValues {
    fullName: string,
    emailAddress: string,
    message: string
}

dotenv.config()


const TextInput = styled.input`
    border-style: none;
    display: block;
    width: 100%;
    padding: 5px;
    font-size:15px;

    &:focus {
        outline: none;
    }
`

const TextArea = styled.textarea`
    border: none;
    width: 100%;
    height: 100%;
    font-size:15px;
    padding:5px;

    &:focus {
            outline: none;
        }

`
const Form = styled.form<{ isLoading: boolean }>`
    pointer-events: ${props => props.isLoading ? 'none' : 'auto'};
`

const ValidationMessage = styled.div<{ showMessage: boolean }>`
    display: ${props => props.showMessage ? 'block' : 'none'};
`

export default () => {
    const [isLoading, setLoading] = React.useState(false)
    const [validationMsg, setValidationMsg] = React.useState('')

    const sendContactMessage = (values: FormValues) => {
        setLoading(true)
        sleep(2000).then(() => {
            try {
                axios.post(process.env.DATAFIRE!, values)
                setValidationMsg('Sent successful')
            } catch {
                setValidationMsg('Email is not valid')
            }
            setLoading(false)
            setValidationMsg('')
        })
    }
    
    return (
        <Section height={90}>
            <ValidationMessage showMessage={validationMsg.length > 0}>{validationMsg}</ValidationMessage>
            <div style={{ width : '100%', height: '100%'}}>
                <h2>Contact</h2>
                <Formik 
                    validationSchema={SchemaValidation}
                    onSubmit={async (values: FormValues) => sendContactMessage(values)}
                    initialValues={{ fullName: '', emailAddress: '', message: '' }}
                >
                    {({ handleSubmit, handleChange, errors, touched }) => (
                        <Form isLoading={isLoading} onSubmit={handleSubmit}>
                            <FormInput name="fullName" errors={errors} touched={touched}>
                                <TextInput name="fullName"  onChange={handleChange} placeholder="Full name*" type="text"/>
                            </FormInput>
                            <FormInput name="emailAddress" errors={errors} touched={touched}>
                                <TextInput name="emailAddress" onChange={handleChange} placeholder="Email*" type="email"/>
                            </FormInput>
                            <FormInput name="message" errors={errors} touched={touched}>
                                <TextArea name="message" onChange={handleChange} placeholder="Message*" cols={30} rows={10}></TextArea>
                            </FormInput>
                            <div>
                                {isLoading ? <h1>Loading</h1> : <Button type="submit">{validationMsg ? validationMsg : 'Submit'}</Button>}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Section>
    )
}
