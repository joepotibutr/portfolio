import React, { Component } from 'react'
import { Section, Button } from '../components'
import styled from 'styled-components'

interface Props {
    
}
interface State {
    
}

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

export default class Contact extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Section height={70}>
                <div style={{ width : '100%', height: '100%'}}>
                <h2>Contact</h2>
                <form action="">
                    <FormInput>
                        <TextInput placeholder="Full name*" type="text"/>
                    </FormInput>
                    <FormInput>
                        <TextInput placeholder="Email*" type="email"/>
                    </FormInput>
                    <FormInput>
                        <textarea style={{ padding: '5px' ,display: 'block', width: '100%',borderRadius: '4px' }} placeholder="Message*" name="" id="" cols={30} rows={10}></textarea>
                    </FormInput>
                    <Button type="submit">Submit</Button>
                </form>
                </div>
            </Section>
        )
    }
}
