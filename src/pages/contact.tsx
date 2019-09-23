import React from 'react'
import { Section, Button } from '../components'
import styled from 'styled-components'

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
    const [fullName,setFullname] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [message,setMessage] = React.useState('')
    return (
        <Section height={70}>
            <div style={{ width : '100%', height: '100%'}}>
            <h2>Contact</h2>
            <form onSubmit={e => {e.preventDefault() 
            console.log({
                fullName, email, message
            })}} action="">
                <FormInput>
                    <TextInput value={fullName} onChange={(e) => setFullname(e.currentTarget.value)} required placeholder="Full name*" type="text"/>
                </FormInput>
                <FormInput>
                    <TextInput value={email} onChange={(e) => setEmail(e.currentTarget.value)} required placeholder="Email*" type="email"/>
                </FormInput>
                <FormInput>
                    <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)} required style={{ padding: '5px' ,display: 'block', width: '100%',borderRadius: '4px' }} placeholder="Message*" name="" id="" cols={30} rows={10}></textarea>
                </FormInput>
                <Button type="submit">Submit</Button>
            </form>
            </div>
        </Section>
    )
}
