import React from 'react'
import { Section, Button } from '../components'
import styled from 'styled-components'
import axios from 'axios'
import dotenv from 'dotenv'

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

export default () => {
    const [fullName, setFullname] = React.useState('')
    const [emailAddress, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const sendContactMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post(process.env.DATAFIRE!,{
                message,
                emailAddress
            })
            alert('successful')
        } catch {
            alert('!!!')
        }
        setLoading(false)
    }

    return (
        <Section height={70}>
            <div style={{ width : '100%', height: '100%'}}>
            <h2>Contact</h2>
            <form onSubmit={sendContactMessage} action="">
                <FormInput>
                    <TextInput value={fullName} onChange={(e) => setFullname(e.currentTarget.value)} required placeholder="Full name*" type="text"/>
                </FormInput>
                <FormInput>
                    <TextInput value={emailAddress} onChange={(e) => setEmail(e.currentTarget.value)} required placeholder="Email*" type="email"/>
                </FormInput>
                <FormInput>
                    <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)} required style={{ padding: '5px' ,display: 'block', width: '100%',borderRadius: '4px' }} placeholder="Message*" name="" id="" cols={30} rows={10}></textarea>
                </FormInput>
                {loading ? <h1>Loading</h1> : <Button type="submit">Submit</Button>}
            </form>
            </div>
        </Section>
    )
}
