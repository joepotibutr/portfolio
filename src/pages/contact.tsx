import React from 'react'
import { Section, Button, FormInput } from '../components'
import styled from 'styled-components'
import axios from 'axios'
import dotenv from 'dotenv'
import SchemaValidation from '../utils/validation'
import { Formik } from 'formik'
import { sleep } from '../utils/helper'

const PoepleTalkingImg = require('../images/people-talking.png')

const Loader = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`

const ContactSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width:100%;
    height:100%;

    @media only screen and (max-width:720px) {
        flex-direction: column;
        > div {
            width: 100% !important; 
        }
        img {
            max-width: 160px !important;
        }
    }
`

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
    padding-left:15px;
    height:40px;

    &:focus {
        outline: none;
    }
`

const TextArea = styled.textarea`
    border: none;
    width: 100%;
    height: 100%;
    font-size:15px;
    padding:10px 15px;

    &:focus {
            outline: none;
        }

`
const Form = styled.form<{ isLoading: boolean, isMessageSent: boolean }>`
    transition: .3s;
    ${props => (props.isMessageSent) && `
        filter: blur(2px);
        pointer-events:none;
    `}
    
`

const SentMessageResult = styled.div<{ isMessageSent: boolean }>`
    opacity: ${props => props.isMessageSent ? '1' : '0'};
    transition: .3s;
    z-index: 1;
    position: absolute;
    transform: translate(151%, 232%);

`


export default () => {
    const [isMessageSent, setMessageSent] = React.useState(false)
    const [isLoading, setLoading] = React.useState(false)

    const resendMessage = () => {

        setMessageSent(false)
    }

    const sendContactMessage = (values: FormValues) => {
        setLoading(true)
        sleep(2000).then(() => {
            try {
                console.log(process.env)
                console.log(process.env.GATSBY_DATAFIRE)
                axios.post(process.env.GATSBY_DATAFIRE!, values)
            } catch {
                console.log('err')
            }
            setMessageSent(true)
            setLoading(false)
        })
    }
    
    const initialValues = { fullName: '', emailAddress: '', message: '' }

    return (
        <Section height={90} mobile={750}>
            <ContactSection>
                <div style={{ width: '40%', display: 'flex', justifyContent: 'center', height: '100%' }}>
                    <img style={{ position: 'absolute', maxWidth: '235px', width: '100%', height: 'auto' }} src={PoepleTalkingImg} />
                </div>
                <div style={{ width: '60%', height: '100%' }}>
                    <SentMessageResult isMessageSent={isMessageSent}>
                        <Button onClick={resendMessage}>Resend Message</Button>
                    </SentMessageResult>
                    <Formik 
                        validationSchema={SchemaValidation}
                        onSubmit={async (values: FormValues, { resetForm, }) => {
                            sendContactMessage(values)
                            resetForm(initialValues)
                        }}
                        initialValues={initialValues}
                    >
                        {({ handleSubmit, handleChange, errors, touched, values }) => (
                            <Form isMessageSent={isMessageSent} isLoading={isLoading}>
                                <FormInput name="fullName" errors={errors} touched={touched}>
                                    <TextInput value={values.fullName || ''} name="fullName"  onChange={handleChange} placeholder="Full name*" type="text"/>
                                </FormInput>
                                <FormInput name="emailAddress" errors={errors} touched={touched}>
                                    <TextInput value={values.emailAddress || ''} name="emailAddress" onChange={handleChange} placeholder="Email*" type="email"/>
                                </FormInput>
                                <FormInput name="message" errors={errors} touched={touched}>
                                    <TextArea value={values.message || ''} name="message" onChange={handleChange} placeholder="Message*" cols={30} rows={10}></TextArea>
                                </FormInput>
                                <div style={{ marginTop: '10px' }}>
                                    <Button disabled={isLoading} onClick={handleSubmit} type="submit">{isLoading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Loader /> </div> : 'Submit' }</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </ContactSection>
        </Section>
    )
}
