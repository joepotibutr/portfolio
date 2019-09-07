import React, { Component } from 'react'

const projects = require('../data/projects.json')

interface Props {
    
}
interface State {
    
}

export default class Projects extends Component<Props, State> {
    state = {}

    render() {
        return (
            <section style={{ height: '100vh', marginTop: '100px' }}>
                <ul style={{
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr'

                }}>
                {projects.map((project: any) => (
                    <li>
                       <h2>{project.name}</h2> <span>{project.year}</span>
                       <p>{project.description}</p>
                       {project.techstack.map((tech: string) => (
                           <span>{tech}</span>
                       ))}
                    </li>
                ))}
                </ul>
            </section>
        )
    }
}
