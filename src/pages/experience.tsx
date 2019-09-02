import React, { Component } from 'react'
const experiences = require('../data/experiences.json')


interface Props {
    
}
interface State {
    
}

export default class Experience extends Component<Props, State> {
    state = {}

    render() {
        return (
            <section style={{ height: '40vh', marginTop: '100px' }}>
            <h2>Experiences</h2>
             {experiences.map((exp: any) => <div>
               <title>{exp.title}</title>
               <head>{exp.date}</head>
               <b>{exp.company}</b>
               <p>{exp.description}</p>
             </div>)}
            
           </section>
        )
    }
}
