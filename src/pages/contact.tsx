import React, { Component } from 'react'

interface Props {
    
}
interface State {
    
}

export default class Contact extends Component<Props, State> {
    state = {}

    render() {
        return (
            <section style={{ height: '70vh', marginTop: '100px' }}>
                <h2>Contact</h2>
                <form action="">
                    <input placeholder="Full name*" style={{ display: 'block' }} type="text"/>
                    <input placeholder="Email*" style={{ display: 'block' }} type="email"/>
                    <textarea style={{ display: 'block' }} placeholder="Message*" name="" id="" cols={30} rows={10}></textarea>
                    <button style={{
                            cursor:'pointer',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            height: '50px',
                            background: 'black',
                            color: 'white',
                            width: '150px',
                    }} type="submit">Submit</button>
                </form>
            </section>
        )
    }
}
