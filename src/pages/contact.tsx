import React, { Component } from 'react'

interface Props {
    
}
interface State {
    
}

export default class Contact extends Component<Props, State> {
    state = {}

    render() {
        return (
            <section style={{ height: '40vh', marginTop: '100px' }}>
                <form action="">
                    <input type="text"/>
                    <input type="email"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </form>
            </section>
        )
    }
}
